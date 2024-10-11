const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Route imports
const football_update = require('./routes/football-update/football-update');
const pushover = require('./routes/pushover/pushover');
const build_notification = require('./routes/pushover/build-notification');
const dummy = require('./routes/dummy/dummy');
const my_fav_team_cron = require('./routes/football-update/my-fav-team-cron');
const ig_downloader = require('./routes/ig-downloader/ig-downloader');
const gratitude_list = require('./routes/gratitude-list/gratitude-list');
const mob = require('./routes/mob/mob');
const software_update = require('./routes/software-update');
const software_dynamiclake = require('./routes/software-update/dynamiclake');
const app_store = require('./routes/software-update/app-store');
const test = require('./routes/test');

// Middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Trust proxy for real client IP detection
app.set('trust proxy', true);

// Root endpoint
app.get('/', (req, res) => {
    const clientIp = req.ip === '::1' ? 'localhost' : req.ip;
    res.status(200).json({
        code: 200,
        status: 'It works.',
        ip: clientIp,
    });
});

// SQLite viewer
app.get('/dev/sqlite', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'sqlite', 'index.html'));
});
app.use('/dev/sqlite/', express.static(path.resolve(__dirname, 'frontend', 'sqlite')));

// Public Static Files
app.use('/public', express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/football-update', football_update);
app.use('/api/fav-football-cron', my_fav_team_cron);
app.use('/api/pushover', pushover);
app.use('/api/build-notification', build_notification);
app.use('/api/dummy', cors(), dummy);
app.use('/api/ig', ig_downloader);
app.use('/api/gratitude-list', gratitude_list);
app.use('/api/mob', mob);
app.use('/api/software-update', software_update);
app.use('/api/software-update/dynamiclake', software_dynamiclake);
app.use('/api/software-update/app-store', app_store);
app.use('/api/test', test);

// Set view engine
app.set('views', [path.join(__dirname, 'routes', 'ig-downloader'), path.join(__dirname, 'routes', 'mob')]);
app.set('view engine', 'ejs');

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
