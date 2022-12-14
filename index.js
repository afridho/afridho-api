const express = require('express')
const app = express()
const port = 3000
const football_update = require("./routes/football-update/football-update")
const pushover = require("./routes/pushover/pushover")
const my_fav_team_cron = require("./routes/football-update/my-fav-team-cron")
const ig_downloader = require("./routes/ig-downloader/ig-downloader")

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// sqlite-viewer
app.get('/dev/sqlite', function (req, res){
  res.sendFile(path.resolve(__dirname, 'frontend', 'sqlite', 'index.html'));
});
app.use("*/dev/sqlite/", express.static(path.resolve(__dirname, 'frontend', 'sqlite')));

// homepage - docusaurus
app.use(express.static('client/build'));
app.get('/', function (req, res){
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// api
app.use("/api/football-update", football_update);
app.use("/api/fav-football-cron", my_fav_team_cron);
app.use("/api/pushover", pushover);
app.set('views', __dirname + '/routes/ig-downloader');
app.set("view engine", "ejs");
app.use("/api/ig", ig_downloader);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
