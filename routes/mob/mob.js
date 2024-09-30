// NOTE - https://www.mensoriginalbranded.com/categories/1767/new-arrivals
// Execute https://afridho-api.vercel.app/api/mob/categories/1755/new-arrivals
// Get all new in arrivals products and send notification to me if new product coming
const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const sendPushoverMessage = require('../../utils/pushover');
const { capitalizeFirstLetter, transformText, removeFirstWord } = require('../../utils/text');
const { toIdr, imageUrlToBase64 } = require('../../utils/converter');
const { compressImageBase64 } = require('../../utils/image');
const lang = require('./locale.json');
const MOB_TOKEN = process.env.PUSHOVER_TOKEN_MOB;
const ClientDB = require('../../utils/connectdb');
const mob = new ClientDB('mob_update_cron');
const mob_logs = new ClientDB('mob_update_cron_logs');

router.get('/categories/:id/web', async (req, res) => {
    const id = req.params.id;
    const page = req.query?.page || 1;
    const per_page = handlePerPage(req.query?.per_page);
    const offset = per_page * page - per_page;
    const previous_button = page > 1 || false;

    const response = await axios.get(
        `https://api.plugo.world/v1/shop/66/products?categories=${id}&sort=sold_out,-sort,-id&limit=${per_page}&offset=${offset}`
    );
    const allData = response.data.data;

    let data = [];
    if (allData.length > 0) {
        data = await Promise.all(
            allData.map(async (item) => {
                const { stock_data, categories_data } = await detail_product(item.id);
                const getPrice = item?.productVariations[0]?.price;
                const idrKurs = parseInt(getPrice);
                const price = formatToIDR(idrKurs);
                const name = removeFirstWord(item.name);
                const productUrl = getProductUrl(item.id, item.name);
                const stock = stock_data?.filter((item) => {
                    if (id == 1759 || categories_data[0]?.id == 1759) {
                        // MARK - show L size when underwear categories
                        return ['M', 'L', 'XL'].includes(item.size);
                    } else {
                        return !['XL', 'XXL', 'XXXL', 'L', 'XL/110', 'L/105', 'LTall', '26', '34', '36'].includes(
                            item.size
                        );
                    }
                });
                return {
                    ...item,
                    name,
                    price,
                    productUrl,
                    stock,
                };
            })
        );
    }
    res.status(200);
    res.render(__dirname + '/mob', { data, previous_button });
    res.end();
});

router.get('/categories/:id/:menu', async (req, res) => {
    const id = req.params.id;
    const label = transformText(req.params.menu);
    const startTime = Date.now();
    const sound = 'magic';

    try {
        const response = await axios.get(
            `https://api.plugo.world/v1/shop/66/products?categories=${id}&sort=sold_out,-sort,-id&limit=1&offset=0`
        );
        const result = response?.data?.data[0];
        const price = result?.productVariations[0]?.price;
        result.label = label;
        result.updated_at = new Date().toISOString();

        const isExist = await mob.mongo_read({ label });
        const message_new = `${lang.new_category} ${capitalizeFirstLetter(label)} ✨`;
        const hasNewUpdate = result.id !== isExist?.id;

        if (isExist) {
            if (hasNewUpdate) {
                const logs_struct = {
                    id: isExist?.id,
                    name: isExist?.name || null,
                    label,
                    updated_at: isExist?.updated_at,
                };
                result.previousId = isExist?.id; // for page checked
                await mob_logs.mongo_insert(logs_struct);
                await mob.mongo_update({ label }, result);
                const { stock_data, categories_data } = await detail_product(result?.id);
                let str_stock = '';
                let str_categories = '';
                stock_data?.map((val) => {
                    str_stock = str_stock.concat(`${val.size} <small>(${val.stock} pcs)</small>&emsp;`);
                });
                categories_data?.map((val) => {
                    str_categories = str_categories.concat(`#${val.name} `);
                });
                const message_update = `${str_categories ? `<i>${str_categories}</i><br><br>` : '<br>'}<b>${toIdr(
                    price
                )}</b>${stock_data ? '<br><br>' : ''}${str_stock}`;

                const inputBase64 = await imageUrlToBase64(result?.images[0]?.url);
                const attachment_base64 = await compressImageBase64(inputBase64, 65); //NOTE - compress images after decode
                const url = `${lang.endpoint}/categories/${id}/web`;
                const url_title = lang.open_browser;
                const title = `✨ ${removeFirstWord(result?.name)}`;
                await sendPushoverMessage(
                    {
                        title,
                        message: message_update,
                        attachment_base64,
                        url,
                        url_title,
                        sound,
                        html: 1,
                    },
                    MOB_TOKEN
                );
            }
        } else {
            await sendPushoverMessage({ title: lang.brand, message: message_new, sound }, MOB_TOKEN);
            await mob.mongo_insert(result);
        }
        const endTime = Date.now();
        const executionTime = ((endTime - startTime) / 1000).toFixed(1);
        res.status(200).json({
            status: lang.works,
            message: hasNewUpdate ? lang.po_sent : lang.skip,
            execution_time: executionTime + 's',
        });
    } catch (error) {
        // handle error
        res.status(500).json({ error: lang.error });
    }
});

function handlePerPage(page = 6) {
    return page > 12 ? 6 : page;
}

function getProductUrl(id, name) {
    const nameUrl = name?.toLowerCase().replace(/\s+/g, '-');
    return `${lang.url}/products/${id}/${nameUrl}`;
}

function formatToIDR(number) {
    const formattedNumber = `Rp ${number.toLocaleString('id-ID', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })}`;
    return formattedNumber;
}

//REVIEW - Development purpose
// router.delete('/categories/:collection', async (req, res) => {
//     const DB_COLLECTION = req.params.collection;
//     try {
//         const result = await eval(DB_COLLECTION).deleteMany({});
//         res.status(200).json({ status: `Deleted ${result.deletedCount} documents successfully.` });
//     } catch (err) {
//         res.status(500).json({ err });
//     }
// });

async function detail_product(id) {
    const endpoint_varian = `https://api.plugo.world/v1/shop/66/products/${id}/without-quantities`;
    const endpoint_quantities = `https://faas.plugo.world/product/products/${id}/variation-quantities`;
    try {
        const [response1, response2] = await Promise.all([axios.get(endpoint_varian), axios.get(endpoint_quantities)]);
        const data1 = response1.data.data.productVariations;
        const data2 = response2.data.data;
        const data3 = response1.data.data.vendorCategories;
        const categories_data = data3.filter((item) => item.id !== 1767); //NOTE - filter New Arrivals label
        let combined = [];
        if (data1.length > 0) {
            combined = data1.map((item, index) => ({
                size: item.details[0].value,
                stock: data2[index].inventories[0].quantity,
            }));
        }
        const stock_data = combined.slice(0, 4).filter((item) => item.stock !== 0);
        return { stock_data, categories_data };
    } catch (err) {
        return err;
    }
}

module.exports = router;
