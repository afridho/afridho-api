// NOTE - https://www.mensoriginalbranded.com/categories/1767/new-arrivals
// Get all new in arrivals products and send notification to me if new product coming

const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const MONGODB_USER = process.env.MONGODB_PASS;
const MONGODB_PASS = process.env.MONGODB_PASS;
const DB_NAME = process.env.DB_NAME;
const { MongoClient, ServerApiVersion } = require('mongodb');
const sendPushoverMessage = require('@utils/pushover');
const capitalizeFirstLetter = require('@utils/capitalize');
const [toIdr, imageUrlToBase64] = require('@utils/converter');
const lang = require('./locale.json');
const MOB_TOKEN = process.env.PUSHOVER_TOKEN_MOB;

// Connect to MongoDB
const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
const database = client.db(DB_NAME);
const mob = database.collection('mob_update_cron');
const mob_logs = database.collection('mob_update_cron_logs');

router.get('/categories/:id/:menu', async (req, res) => {
    const id2 = req.params.id;
    const menu = req.params.menu;

    // demo 1774 & 1759
    const id = 1759;
    try {
        const response = await axios.get(
            `https://api.plugo.world/v1/shop/66/products?categories=${id2}&sort=sold_out,-sort,-id&limit=1&offset=0`
        );
        const result = response?.data?.data[0];
        const price = result?.productVariations[0]?.price;
        result.label = menu;

        const isMenuAvailable = await mongo_read(mob, menu);

        const title = lang.brand;
        const message_new = `${lang.new_category} ${capitalizeFirstLetter(menu)} ✨`;

        // const device = 'ridhosmac';
        const device = 'iphone6s';

        if (isMenuAvailable) {
            if (result.id !== id) {
                // REVIEW - if has difference, push pushover in here
                await mongo_update(mob, result, menu);
                const logs_struct = {
                    releaseDate: result?.releaseDate ? new Date(result?.releaseDate).toLocaleTimeString() : null,
                    label: menu,
                    created_at: new Date().toLocaleString(),
                };
                await mongo_insert(mob_logs, logs_struct);

                const stock_data = await detail_stock(result?.id);
                let str_stock = '';
                stock_data.map((val) => {
                    str_stock = str_stock.concat(`${val.size} <small>(${val.stock} pcs)</small>&emsp;`);
                });

                const message_update = `<b><i>${result?.name}<i></b><br><br><b><font color="#434343"> ${toIdr(
                    price
                )}</font></b><br><br>${str_stock}`;

                const attachment_base64 = await imageUrlToBase64(result?.images[0]?.url);

                await sendPushoverMessage(
                    {
                        title,
                        device,
                        message: message_update,
                        attachment_base64,
                        html: 1,
                    },
                    MOB_TOKEN
                );
            }
        } else {
            await sendPushoverMessage({ title, message: message_new, device });
            await mongo_insert(mob, result);
        }
        res.status(200).json({ status: lang.works });
    } catch (error) {
        console.log(error);
        // handle error
        res.status(500).json({ error: lang.error });
    }
});

router.delete('/categories/:collection', async (req, res) => {
    const DB_COLLECTION = req.params.collection;
    try {
        const result = await mongo_delete(eval(DB_COLLECTION));
        res.status(200).json({ status: `Deleted ${result.deletedCount} documents successfully.` });
    } catch (err) {
        res.status(500).json({ err });
    }
});

async function detail_stock(id) {
    const endpoint_varian = `https://api.plugo.world/v1/shop/66/products/${id}/without-quantities`;
    const endpoint_quantities = `https://faas.plugo.world/product/products/${id}/variation-quantities`;

    try {
        const [response1, response2] = await Promise.all([axios.get(endpoint_varian), axios.get(endpoint_quantities)]);
        const data1 = response1.data.data.productVariations;
        const data2 = response2.data.data;
        const combined = data1.map((item, index) => ({
            size: item.details[0].value,
            stock: data2[index].inventories[0].quantity,
        }));

        const result = combined.slice(0, 4).filter((item) => item.stock !== 0);
        return result;
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

async function mongo_delete(collection) {
    return await collection.deleteMany({});
}

module.exports = router;
