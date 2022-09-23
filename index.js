const express = require('express')
const app = express()
const port = 3000
const football_update = require("./routes/football-update/football-update")
const pushover = require("./routes/pushover/pushover")
const my_fav_team_cron = require("./routes/football-update/my-fav-team-cron")
const ig_downloader = require("./routes/ig-downloader/ig-downloader")

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('client/build'));
const path = require('path');
app.get('/', function (req, res){
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, './routes/ig-downloader/index'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");


app.use("/api/football-update", football_update);
app.use("/api/fav-football-cron", my_fav_team_cron);
app.use("/api/pushover", pushover);
app.use("/api/ig", ig_downloader);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
