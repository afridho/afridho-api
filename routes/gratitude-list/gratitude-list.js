const express = require('express');
const router = express.Router();
require('dotenv').config();
const getClientDB = require('../../utils/connectdb');
const sendPushoverMessage = require('../../utils/pushover');
const { encrypt, decrypt } = require('../../utils/encrypt');
const TOKEN = process.env.PUSHOVER_TOKEN_GRATITUDE_LIST;
const GET_NICKNAME = process.env.GRATITUDE_LIST_NICKNAME ? ' ' + process.env.GRATITUDE_LIST_NICKNAME : '';
const GET_PASSWORD = process.env.GRATITUDE_LIST_PASSWORD;
const GET_DAY_SENT = process.env.GRATITUDE_LIST_DAY ?? 'Saturday';
const { format, addHours, getDay } = require('date-fns');

const database = getClientDB();
const collection = database.collection('gratitude_list');

// Shortcut Name
const shortcut_name = 'Gratitude List';

// Time Configuration
const total_days = 7; // 1 week retrieved data
const time_zone = 7; // Asia/Jakarta
const days_before = new Date(new Date().setDate(new Date().getDate() - total_days));

router.post('/', async (req, res) => {
    if (!req.headers['password']) {
        res.status(401);
        res.json({ message: 'You need password for authorization' });
        res.end();
    } else {
        if (req.headers['password'] !== GET_PASSWORD) {
            res.json({ message: 'Wrong Password. Unauthorized!' });
            res.status(403);
            res.end();
        } else {
            const date = new Date();
            const message = encrypt(req.body?.message);
            const location = req.body.location ?? '';
            let _data = { message, location, date };
            await mongo_insert(_data);
            res.json({ message, status: 'success' });
            res.status(200);
            res.end();
        }
    }
});

router.get('/', async (req, res) => {
    // send pushover to my device
    const data = await get_data_one_week();
    var str = '';
    data.map((val) => {
        str = str.concat(
            `◉ ${decrypt(val.message)} <small>(${format(
                addHours(val.date, time_zone),
                'eeee, HH:mm'
            )})</small> ${parse_location_message(val.location)}\n\n`
        );
    });
    const total = data?.length;
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
        getDay(addHours(new Date(), time_zone))
    ];
    const html = 1; //for pushover needed

    //REVIEW - send if set day same with cron
    if (GET_DAY_SENT === weekday) {
        const week_number = await get_week_number();
        const range_start = format(days_before, 'd MMM');
        const range_end = format(new Date(), 'd MMM');
        const title = `${range_start} - ${range_end}〘Week ${week_number}〙`;
        const message = await parse_messages_pushover(str, total);
        await sendPushoverMessage({ message, title, html }, TOKEN);
        //NOTE send status if open from web
        res.status(200);
        res.json({ message: 'Sent', code: 200 });
        res.end();
    } else {
        const title = shortcut_name;
        const filtered = await get_filtered_data_one_week(data);
        const message = await remindMe_message_pushover(filtered, weekday);
        const url = `shortcuts://run-shortcut?name=${encodeURIComponent(shortcut_name.toLowerCase())}`;
        const url_title = 'Add Gratitude';
        if (message) await sendPushoverMessage({ message, title, url, url_title, html }, TOKEN);
        //NOTE send status if open from web
        const removeHtmlTags = (text) => text.replace(/<[^>]*>/g, '');
        res.status(200);
        res.json({
            message: filtered ? `You have ${filtered} gratitude 😊.` : await removeHtmlTags(message),
            code: 200,
        });
        res.end();
    }
});

async function get_filtered_data_one_week(data) {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const daysToCheck = [];
    for (let i = 0; i < 5; i++) {
        const prevDay = (dayOfWeek - i + 7) % 7;
        daysToCheck.push(prevDay);
    }

    const filteredData = data.filter((item) => {
        const itemDayOfWeek = item.date.getDay();
        return daysToCheck.includes((dayOfWeek - itemDayOfWeek + 7) % 7);
    });
    return filteredData?.length;
}

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

function parse_location_message(location) {
    const baseGoogleMapsURL = 'https://www.google.com/maps';
    const encodedLocation = encodeURIComponent(location);
    const urlLocation = baseGoogleMapsURL + '?q=' + encodedLocation;

    if (location && location.length > 0) {
        return location == 'HOME' ? `<small>🏡</small>` : `<small><a href=${urlLocation}>📍</a></small>`;
    }
    return '';
}

async function parse_messages_pushover(message, total) {
    if (total === 0) return `<h3>Very sad${GET_NICKNAME}, no gratitude this week😢</h3>`;
    return `<h3>This is what are you thankful${GET_NICKNAME}😍</h3>` + message + '<h5>Total = ' + total + '</h5>';
}

async function remindMe_message_pushover(total, day) {
    if (total === 0)
        return `<h4>Hei ${GET_NICKNAME}, i want remind you, what has Jesus done for your life till this ${day}? 😉</h4>`;
    return null;
}

async function mongo_insert(data) {
    return await collection.insertOne(data);
}

async function get_week_number() {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
}

module.exports = router;
