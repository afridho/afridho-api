---
sidebar_position: 1
title : Instagram Downloader
---

Download media images/videos from Instagram. This API using RapidAPI to get data.

## `GET` Endpoint
```
/api/ig
```

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

```html title=input.ejs
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Instagram Downloader</title>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.btn { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }
.btn:hover, .btn:active, .btn.active { background-color: #e6e6e6; }
.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; border-radius: 5px; }
.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; transition: 0s linear; }
.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }
.btn-primary.active { color: rgba(255, 255, 255, 0.75); }
.btn-primary { background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }
.btn-primary:hover, .btn-primary:active, .btn-primary.active{ filter: none; background-color: #4a77d4; }
.btn-block { width: 100%; display:block; }

button:disabled,
button[disabled]{
	background: #d0d1d0;
	border:none;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	color: #aeaeae;
	text-shadow: none;
}

.btn:disabled:hover,
.btn[disabled]:hover{
	background: #d0d1d0;
	transition: none!important;
	background-position: 0;
	color: #aeaeae;
	text-shadow: none;
}

* { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }

html { width: 100%; height:100%; overflow:hidden; }

body { 
	width: 100%;
	height:100%;
	font-family: 'Open Sans', sans-serif;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.login { 
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -150px 0 0 -150px;
	width:300px;
	height:300px;
}
.login h1 { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }

input { 
	width: 100%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	transition: box-shadow .5s ease;
}
input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }
.mt-10{
	margin-top: 10px;
}

	</style>  
</head>
<body>
<div class="login">
  <h1>Instagram Downloader</h1>
  <form action="/api/ig/download" method="POST">
	<input type="text" placeholder='Post - Story - Reels - IGTV' class='text' #input_data id='input_data' name='link' required>
	<button type="submit" #submitData id="submitData" class="btn btn-primary btn-block btn-large mt-10">Submit</button>
  </form>
</div>
</body>
</html>
```

```html title=input_try_again.ejs
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Instagram Downloader</title>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.btn { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }
.btn:hover, .btn:active, .btn.active { background-color: #e6e6e6; }
.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; border-radius: 5px; }
.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; transition: 0s linear; }
.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }
.btn-primary.active { color: rgba(255, 255, 255, 0.75); }
.btn-primary { background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }
.btn-primary:hover, .btn-primary:active, .btn-primary.active{ filter: none; background-color: #4a77d4; }
.btn-block { width: 100%; display:block; }

button:disabled,
button[disabled]{
	background: #d0d1d0;
	border:none;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	color: #aeaeae;
	text-shadow: none;
}

.btn:disabled:hover,
.btn[disabled]:hover{
	background: #d0d1d0;
	transition: none!important;
	background-position: 0;
	color: #aeaeae;
	text-shadow: none;
}

* { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }

html { width: 100%; height:100%; overflow:hidden; }

body { 
	width: 100%;
	height:100%;
	font-family: 'Open Sans', sans-serif;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

a {
	color:white;
	text-decoration: none;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


.login { 
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -150px 0 0 -150px;
	width:300px;
	height:300px;
}
.login h1 { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }

input { 
	width: 100%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	transition: box-shadow .5s ease;
}
input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }
.mt-10{
	margin-top: 10px;
}

.box-info{
	font-size: 0.8em;
	padding: 6px;
	color: white;
	margin-bottom: 15px;
	border-radius: 2px;
}
.error-link{
	background: #f03e3e;
	border: 1px solid #e03131; 
}

.info-link{
	background: #40c057;
	border:1px solid #2f9e44;
}
.color-white{
	color:#ffffff;
}
	</style>
</head>

<script type="text/javascript">
    function load()
    {
		'<%if (locals.media) { %>'
			window.open("<%- media %>", "_blank");
		'<% } %>'

    }
</script>

<body onload="load()">

<div class="login">
	
	<h1><a href='/api/ig'>Instagram Downloader</a></h1>
    <form action="/api/ig/download" method="POST">

		
		<%if (locals.invalid_link) { %>
			<div id="info-error" class="error-link box-info"><%- invalid_link %></div>
		<% } %>

		<%if (locals.valid_link) { %>
			<div id="info-link" class="info-link box-info"><%- valid_link %></div>
		<% } %>

	<input type="text" placeholder='Post - Story - Reels - IGTV' class='text' #input_data id='input_data' name='link' required>
        <button type="submit" #submitData id="submitData" class="btn btn-primary btn-block btn-large mt-10">Submit</button>
	
		<%if (locals.media) { %>
			<div id="download-media-mobile" #download-media-mobile>
			<h1 class="color-white">👇️</h1>
			<button onclick="save_image('<%- media %>')" class="btn btn-primary btn-block btn-large" style="margin-top:25px;"><%if (locals.icon) { %> <%- icon %> <% } %> Download</button>
		</div>
			<% } %>
	</form>

</div>

<script>
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		document.getElementById("download-media-mobile").style.display = "block";
	}
	else{
	document.getElementById("download-media-mobile").style.display = "none";
	}
	</script>
<script>

async function save_image(image_url) {
    window.open(image_url, '_blank');
}

var infoError = setInterval(removeInfoError, 10000);
var infoLink = setInterval(removeInfoLink, 1500);

function removeInfoError() {
	if(document.getElementById("info-error")){
	document.getElementById("info-error").style.display = "none";
	clearInterval(infoError)
	}
}
function removeInfoLink() {
	if(document.getElementById("info-link")){
		document.getElementById("info-link").style.display = "none";
		clearInterval(infoLink)
	}
}

</script>
</body>
</html>
```

```html title=download-carousel.ejs

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Instagram Downloader</title>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.btn { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }
.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled] { background-color: #e6e6e6; }
.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; transition: background-position 0s linear; }
.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }
.btn-primary.active { color: rgba(255, 255, 255, 0.75); }
.btn-primary { background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }
.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] { filter: none; background-color: #4a77d4; }
.btn-block { width: 100%; display:block; }

* { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }

html { width: 100%; height:100%; overflow-x: hidden; overflow-y: scroll; }

body { 
	width: 100%;
	height:100%;
	font-family: 'Open Sans', sans-serif;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


a{
  color:white;
  text-decoration: none;
}
.login { 
	position: absolute;
	top: 30%;
	left: 50%;
	margin: -150px 0 0 -150px;
	width:300px;
	height:300px;
}
.login h1 { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }

input { 
	width: 100%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	-webkit-transition: box-shadow .5s ease;
	-moz-transition: box-shadow .5s ease;
	-o-transition: box-shadow .5s ease;
	-ms-transition: box-shadow .5s ease;
	transition: box-shadow .5s ease;
}
.text-center{
  text-align: center;
}
.color-white{
  color: white;
}
.text-justify{
  text-align: justify;
}
.caption {
  height: 60%;
  overflow: auto;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  padding:8px;
  background:white;
  color:#000;
  border-radius: 4px;
}
.small-text{
  font-size: 0.9em;
}

.mt-5{margin-top:5px}
.mt-10{margin-top:10px}
.mt-15{margin-top:15px}
.mt-20{margin-top:20px}
.mb-5{margin-bottom:5px}
.mb-10{margin-bottom:10px}
.mb-15{margin-bottom:15px}
.mb-20{margin-bottom:20px}
input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }
      </style>
      
</head>
<body>

  <div class="login">
    <h1><a href='/api/ig'>Instagram Downloader</a></h1>

    <div class="text-center">

    <% if (typeof media === 'object' && Type == 'Carousel'){ %>
      <% for (var i = 0; i < media.length; i++) { %>
        <div class="color-white small-text">(Media <%- [i+1] %>)</div>
        <button onclick="save_media('<%- media[i] %>')" class="btn btn-primary btn-block btn-large">💾 Download</button><br>
<% } %>
<% } %>
  </div>


  <% if (title){ %>
      <div class="color-white text-center small-font">📌 Caption</div>
  <div class="caption small-font"><%- title %></div><br>   

  <% } %>
  <div class="text-center">
  <button onclick="back_homepage()" class="btn btn-large mb-20" >&nbsp;&nbsp;🔙&nbsp;&nbsp;</button>
  </div>
  </div>


  <script>
  function back_homepage(){
      window.open('/api/ig', '_self');
  }

  async function save_media(image_url) {
    window.open(image_url, '_blank');
  }

</script>
</body>
</html>
```