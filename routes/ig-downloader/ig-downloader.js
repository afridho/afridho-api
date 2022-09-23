const axios = require('axios');
const express = require("express");
const router = express.Router();
require('dotenv').config()
const RAPID_API_IGDOWNLOADER_KEY = process.env.RAPID_API_IGDOWNLOADER_KEY

router.get('/', async (req, res) => {
    // console.log(req.body);
    res.render(__dirname + '/input');
    })

router.post('/download', async (req, res) => {
    // const data = await get_image(image_from_instagram.media)
    // const media = [
        //     "https://scontent.cdninstagram.com/v/t51.2885-15/307765281_150642087657555_6361586762178426414_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=ewKCvTTHp8AAX_HWviS&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODM0MzA0NjM5Mg%3D%3D.2-ccb7-5&oh=00_AT_udd2E_iIR99hxzcBHP-mnqV5evqPPzua5IRfv2jdi3A&oe=6334FE04&_nc_sid=78c662",
        //     "https://scontent.cdninstagram.com/v/t51.2885-15/308060471_1584189138650435_595238568370390224_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=ppzyDtT-gSUAX-n5NBu&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODI3NjAwNzc3MQ%3D%3D.2-ccb7-5&oh=00_AT-6ANkZPncp1yDB_olblWyJVjodiSy7IujFfriF4b8BWA&oe=6334BC77&_nc_sid=78c662",
        //     "https://scontent.cdninstagram.com/v/t51.2885-15/308208588_120292194140608_7241924886866869578_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=lpvqFy-FnA8AX9naxGU&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODI4NDI0MjY2Nw%3D%3D.2-ccb7-5&oh=00_AT_mJ36x6v_s-3DZrr1toVQqI5Puq-s7O7onaGZioGjSFA&oe=63344DE6&_nc_sid=78c662",
        //     "https://scontent.cdninstagram.com/v/t51.2885-15/308016585_494223315551442_8810189213287579869_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=6JCd8Db7myQAX9RJ0yM&edm=AJBgZrYBAAAA&ccb=7-5&ig_cache_key=MjkzMzI5ODAwODI3NTgzNjE0OA%3D%3D.2-ccb7-5&oh=00_AT9KH70qvGOzKA5PVUVpFG7yMN3rzrzrETSZMKy5bsKTFQ&oe=63345D75&_nc_sid=78c662"
        //   ]
        // const Type = 'Carousel'
        
        // const media = "https://instagram.fdmm3-2.fna.fbcdn.net/v/t51.2885-15/277076619_643545756752904_1368362493335844379_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fdmm3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0Wq0VNhFzI4AX_AIutF&edm=AABBvjUBAAAA&ccb=7-5&oh=00_AT848oHa6vdfVzvo9r5MrbCR78wvlgRldaH3TlOlf-GvOw&oe=6334C68B&_nc_sid=83d603"
        // const Type = 'Post-Image'
        
    const image_from_instagram = await get_instagram_image(req.body.link)
    
    const title = image_from_instagram.title ? image_from_instagram.title : ''
    const media = image_from_instagram.media
    const Type = image_from_instagram.Type
    res.render(__dirname + '/download', {media:media, Type:Type, title:title})
    })


async function get_instagram_image(ig_link){
    const options = {
    method: 'GET',
    url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
    params: {url: ig_link},
    headers: {
        'X-RapidAPI-Key': RAPID_API_IGDOWNLOADER_KEY,
        'X-RapidAPI-Host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
    }
    };

    return await axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}


module.exports = router;

