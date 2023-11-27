// var data = {
//     status: 'success',
//     message: 'Successfully',
//     data: [
//         {
//             name: 'pause',
//             value: false,
//         },
//         {
//             name: 'pause_request',
//             value: true,
//         },
//     ],
// };

const axios = require('axios');
const express = require('express');
const router = express.Router();
const FormData = require('form-data');
require('dotenv').config();
const MONGODB_USER = process.env.MONGODB_PASS;
const MONGODB_PASS = process.env.MONGODB_PASS;
const { MongoClient, ServerApiVersion } = require('mongodb');

// Connect to MongoDB
const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
const database = client.db('afridho-api');
const collection = database.collection('gratitude_list');

const data = async () => {
    const baru = await collection.find({}).toArray();
    console.log('🚀 ~ file: stpqueueStatus.js:90 ~ router.get ~ baru:', baru);

    // //REVIEW - send if set day same with cron
    // if (GET_DAY_SENT === weekday) {
    //     const week_number = await get_week_number();
    //     const range_start = format(days_before, 'd MMM');
    //     const range_end = format(new Date(), 'd MMM');
    //     const title = `${range_start} - ${range_end}〘Week ${week_number}〙`;
    //     const message = await parse_messages_pushover(str, total);
    //     await send_pushover({ message, title });
    // } else {
    //     const title = shortcut_name;
    //     const message = await remindMe_message_pushover(total, weekday);
    //     const url = `shortcuts://run-shortcut?name=${encodeURIComponent(shortcut_name.toLowerCase())}`;
    //     const url_title = 'Add Gratitude';
    //     if (message) await send_pushover({ message, title, url, url_title });
    // }

    // //NOTE send status if open from web
    // res.status(200);
    // res.json({ message: 'Sent', code: 200 });
    // res.end();
    return data;
};

async function get_data_one_week() {
    return await collection
        .find({
            date: {
                $lt: new Date(),
                $gte: days_before,
            },
        })
        .toArray();
}

module.exports = data;
