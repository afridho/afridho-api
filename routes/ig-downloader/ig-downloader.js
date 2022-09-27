const axios = require('axios');
const express = require("express");
const router = express.Router();
require('dotenv').config()
var recursion_now = 0;
var recursion_limit = 20;// backup RapidAPI-KEY recursion process

router.get('/', async (req, res) => {
    res.render(__dirname + '/input');
    res.end()
    })

router.post('/download', async (req, res) => {
    // const media = [
    //         "https://scontent.cdninstagram.com/v/t51.2885-15/307765281_150642087657555_6361586762178426414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=ewKCvTTHp8AAX_HWviS&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODM0MzA0NjM5Mg%3D%3D.2-ccb7-5&oh=00_AT_udd2E_iIR99hxzcBHP-mnqV5evqPPzua5IRfv2jdi3A&oe=6334FE04&_nc_sid=78c662",
    //         "https://scontent.cdninstagram.com/v/t51.2885-15/308060471_1584189138650435_595238568370390224_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=ppzyDtT-gSUAX-n5NBu&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODI3NjAwNzc3MQ%3D%3D.2-ccb7-5&oh=00_AT-6ANkZPncp1yDB_olblWyJVjodiSy7IujFfriF4b8BWA&oe=6334BC77&_nc_sid=78c662",
    //         "https://scontent.cdninstagram.com/v/t51.2885-15/308208588_120292194140608_7241924886866869578_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=lpvqFy-FnA8AX9naxGU&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODI4NDI0MjY2Nw%3D%3D.2-ccb7-5&oh=00_AT_mJ36x6v_s-3DZrr1toVQqI5Puq-s7O7onaGZioGjSFA&oe=63344DE6&_nc_sid=78c662",
    //         "https://scontent.cdninstagram.com/v/t51.2885-15/308016585_494223315551442_8810189213287579869_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=6JCd8Db7myQAX9RJ0yM&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODI3NTgzNjE0OA%3D%3D.2-ccb7-5&oh=00_AT9KH70qvGOzKA5PVUVpFG7yMN3rzrzrETSZMKy5bsKTFQ&oe=63345D75&_nc_sid=78c662"
    //       ]
    //     const Type = 'Carousel'
    const image_from_instagram = await get_instagram_image(req.body.link)
    if(image_from_instagram[0] == 200){
        if('error' in image_from_instagram[1]){

            res.render(__dirname + '/input_try_again', {invalid_link : (Object.values(image_from_instagram[1])[0]).replace("reomved", "removed")});
        } else{
            const title = image_from_instagram[1]?.title
            const media = image_from_instagram[1]?.media
            const Type = image_from_instagram[1]?.Type 
            
            if (Type == 'Carousel'){
                res.render(__dirname + '/download_carousel', {media:media, Type:Type, title:title})
            }else{
                const icon = Type == 'Post-Image' ? '📷️' : '📹️'
                res.render(__dirname + '/input_try_again', {valid_link : 'Download success', media : media, icon: icon});
                }
            }
    }else{
        res.render(__dirname + '/input_try_again', {invalid_link : image_from_instagram[1]});
    }}
    )

async function get_instagram_image(ig_link){
    recursion_now++;
    const options = {
    method: 'GET',
    url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
    params: {url: ig_link},
    headers: {
        'X-RapidAPI-Key' : await RapidAPI_KEY(),
        'X-RapidAPI-Host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
    }
    };

    return await axios.request(options).then(function (response) {
        return [response.status, response.data]
    }).catch(async function (error) {
        if(error.response.status == 429){
            if(recursion_now <= recursion_limit){   
            return get_instagram_image(ig_link)
            }else{
                return [error.response.status,Object.values(error.response.data)[0]]
            }
        }else{
            return [error.response.status,Object.values(error.response.data)[0]]
        }
    });
}

async function RapidAPI_KEY() {
    filtered_env = Object.fromEntries(Object.entries(process.env).filter(([key]) => key.includes('IGDOWNLOADER_KEY')));
    var keys = Object.keys(filtered_env);
    return await filtered_env[keys[ keys.length * Math.random() << 0]];
};


module.exports = router;

