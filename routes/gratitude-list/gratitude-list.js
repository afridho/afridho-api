const axios = require('axios');
const express = require("express");
const router = express.Router();
const FormData = require('form-data');
require('dotenv').config()
const MONGODB_USER = process.env.MONGODB_PASS
const MONGODB_PASS = process.env.MONGODB_PASS
const USER_KEY = process.env.PUSHOVER_KEY
const TOKEN = process.env.PUSHOVER_TOKEN_GRATITUDE_LIST
const GET_NICKNAME = process.env.GRATITUDE_LIST_NICKNAME ? (' '+ process.env.GRATITUDE_LIST_NICKNAME) : ''
const GET_PASSWORD = process.env.GRATITUDE_LIST_PASSWORD 
const { MongoClient, ServerApiVersion } = require('mongodb');
const { format, addHours } = require('date-fns')


// Connect to MongoDB
const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const database = client.db('productivity');
const collection = database.collection('gratitude_list');

const total_days = 7 // 1 week retrieved data
const today = new Date()
const days_before = (new Date(new Date().setDate(new Date().getDate() - total_days)))

router.post("/", async (req, res) =>{
    if (!req.headers['password']) {
        res.status(401)
        res.json({ message : "You need password for authorization"})   
        res.end()
    }else{
    if(req.headers['password'] !== GET_PASSWORD) {
        res.json({message : 'Wrong Password. Unauthorized!'})
        res.status(403)
        res.end()
    }else{
        const date = today
        const message = req.body.message
        _data = {message , date}
        await mongo_insert(_data)
        res.json({message : req.body.message, status: 'success'})
        res.status(200)
        res.end()
    }}
})

router.get("/", async (req, res) =>{
    // send pushover to my device
    const data = await get_data_one_week()
    var str = ''
    data.map(val => {
        str = str.concat(`◉ ${val.message} <small>(${format(addHours(val.date, 6), 'eeee, HH:mm')})</small>\n\n`);
    })
    const total = data?.length
    const content = await parse_messages_pushover(str, total)
    await send_pushover(content)
    // console.log(str)
    
    //send status if open from web
    res.status(200)
    res.json({message: 'Sent', code: 200})
    res.end()
})

async function get_data_one_week(){
    return await collection.find({
            date: {
                $lt: new Date(),
                $gte: days_before,
            },
        }).toArray()
}

async function parse_messages_pushover(message, total){
    if(total === 0) return `<h3>Very sad${GET_NICKNAME}, no gratitude this week😢</h3>`
    return `<h3>This is what are you thankful${GET_NICKNAME}😍</h3>`+message+"<h5>Total = "+total+"</h5>"
}

async function mongo_insert(data){
    return await collection.insertOne(data);
}

async function get_week_number(){
    currentDate = today;
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
}


async function send_pushover(message){
    const week_number = await get_week_number()
    const range_start = format(days_before, 'd MMM')
    const range_end = format(today, 'd MMM')

    let fd = new FormData();
    fd.append("token", TOKEN);
    fd.append("user", USER_KEY);
    fd.append("title", `${range_start} - ${range_end}〘Week ${week_number}〙`)
    fd.append("message", message)
    fd.append("html", 1)

    try{
        return await axios({
            method: "POST",
            url: "https://api.pushover.net/1/messages.json",
            data: fd,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(content => {});
    }catch (error) {
        return ({request: null, status: 0})
    }
}

module.exports = router;