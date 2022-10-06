---
sidebar_position: 1
title : Instagram Downloader
---

Download media images/videos from Instagram. This API using RapidAPI to get data.

## `GET` Endpoint
```
/api/ig
```

## Environment

| ENV      | Description |
| ----------- | ----------- |
| **IGDOWNLOADER_KEYx**      | token of [RapidApi IG Downloader](https://rapidapi.com/maatootz/api/instagram-story-downloader-media-downloader/). 'x' for number. (IGDOWNLOADER_KEY1, IGDOWNLOADER_KEY2, etc)     |

## Source Code

```javascript title="ig-downloader.js"
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
  const image_from_instagram = await get_instagram_image(req.body.link)
  if(image_from_instagram[0] == 200){
    if('error' in image_from_instagram[1]){

        res.render(__dirname + '/input_try_again', {invalid_link : (Object.values(image_from_instagram[1])[0]).replace("reomved", "removed")});
    }else{
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
    }};

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
```

## Result

#### <a href='/api/ig' target="_blank">Instagram Downloader </a>🏃🏻‍♂️