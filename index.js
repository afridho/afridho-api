const express = require('express')
const app = express()
const port = 3000
const football_update = require("./routes/football-update/football-update")
const pushover = require("./routes/pushover/pushover")
const my_fav_team_cron = require("./routes/football-update/my-fav-team-cron")

app.use(express.static('client/build'));
const path = require('path');
app.get('/', function (req, res){
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use("/api/football-update", football_update);
app.use("/api/fav-football-cron", my_fav_team_cron);
app.use("/api/pushover", pushover);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
