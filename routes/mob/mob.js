// NOTE - https://www.mensoriginalbranded.com/categories/1767/new-arrivals
// Execute https://afridho-api.vercel.app/api/mob/categories/1755/new-arrivals
// Get all new in arrivals products and send notification to me if new product coming
const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const sendPushoverMessage = require('../../utils/pushover');
const getClientDB = require('../../utils/connectdb');
const [capitalizeFirstLetter, transformText, removeFirstWord] = require('../../utils/text');
const [toIdr, imageUrlToBase64] = require('../../utils/converter');
const [compressImageBase64] = require('../../utils/image');
const lang = require('./locale.json');
const MOB_TOKEN = process.env.PUSHOVER_TOKEN_MOB;
const database = getClientDB();
const mob = database.collection('mob_update_cron');
const mob_logs = database.collection('mob_update_cron_logs');

router.get('/categories/:id/:menu', async (req, res) => {
    const id = req.params.id;
    const menu = transformText(req.params.menu);
    const startTime = Date.now();
    const currentTime = new Date().toISOString();

    try {
        const response = await axios.get(
            `https://api.plugo.world/v1/shop/66/products?categories=${id}&sort=sold_out,-sort,-id&limit=1&offset=0`
        );
        const result = response?.data?.data[0];
        const price = result?.productVariations[0]?.price;
        result.label = menu;
        result.updated_at = currentTime;

        const isExist = await mongo_read(mob, menu);
        const message_new = `${lang.new_category} ${capitalizeFirstLetter(menu)} ✨`;
        const hasNewUpdate = result.id !== isExist?.id;

        if (isExist) {
            if (hasNewUpdate) {
                await mongo_update(mob, result, menu);
                const logs_struct = {
                    label: menu,
                    last_product: result?.name || null,
                    releaseDate: result?.releaseDate || null,
                    created_at: currentTime,
                };
                await mongo_insert(mob_logs, logs_struct);
                const { stock_data, categories_data } = await detail_product(result?.id);
                let str_stock = '';
                let str_categories = '';
                stock_data?.map((val) => {
                    str_stock = str_stock.concat(`${val.size} <small>(${val.stock} pcs)</small>&emsp;`);
                });
                categories_data?.map((val) => {
                    str_categories = str_categories.concat(`#${val.name} `);
                });
                const message_update = `<i>${str_categories}</i><br><br><b> ${toIdr(price)}</b>${
                    stock_data ? '<br><br>' : ''
                }${str_stock}`;

                const inputBase64 = await imageUrlToBase64(result?.images[0]?.url);
                const attachment_base64 = await compressImageBase64(inputBase64, 65); //NOTE - compress images after decode
                const url = `${lang.url}/categories/${id}/${menu}`;
                const url_title = lang.open_browser;
                const title = `✨ ${removeFirstWord(result?.name)}`;
                await sendPushoverMessage(
                    {
                        title,
                        message: message_update,
                        attachment_base64,
                        url,
                        url_title,
                        html: 1,
                    },
                    MOB_TOKEN
                );
            }
        } else {
            await sendPushoverMessage({ title: lang.brand, message: message_new }, MOB_TOKEN);
            await mongo_insert(mob, result);
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
        if (data1.length > 1) {
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

async function mongo_read(collection, label) {
    //LINK - label for condition
    const alias = { label };
    return await collection.findOne(alias);
}
async function mongo_insert(collection, data) {
    return await collection.insertOne(data);
}
async function mongo_update(collection, data, label) {
    const alias = { label };
    const updateDoc = { $set: data };
    return await collection.updateOne(alias, updateDoc, {});
}

module.exports = router;
