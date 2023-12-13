const express = require('express');
const router = express.Router();
const analyzeSpread = require('./json/analyzeSpread');
const dashboard = require('./json/dashboard');
const slippage = require('./json/slippage');
const tickAccount = require('./json/tickAccount');
const getMenu = require('./json/getMenu');
const getRole = require('./json/getRole');
const {
    triggeredReport,
    detailScalper,
    detailAVProfit,
    detailOpenPosition,
    detailRelatedAccount,
} = require('./json/triggeredReport');
const { logAccountProfileA, equityHighestLowest } = require('./json/profileA');
const { autoConfig } = require('./json/autoConfig');
const { netPositionDialog } = require('./json/NetPositionDialog');
const { getDaylightSaving, postDaylightSaving } = require('./json/time-alignment');
const { netVolume, profileA } = require('./json/report');
const dataMenuV2 = require('./json/v2');
const severityAlert = require('./json/severityAlert');
const severityEventDetail = require('./json/severityEventDetail');
const severityTriggeredReport = require('./json/severityTriggeredReport');
const severityClosedTransactions = require('./json/severityClosedTransaction');
const severityOpenTrades = require('./json/severityOpenTrades');
const severityHistory = require('./json/severityHistory');
const assessmentAccountStatus = require('./json/assessmentAccountStatus');

const stpQueue = require('./json/stpqueueStatus');

require('dotenv').config();
const MONGODB_USER = process.env.MONGODB_PASS;
const MONGODB_PASS = process.env.MONGODB_PASS;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

router.get('/', async (req, res) => {
    res.status(200);
    res.json({ status: 'it works' });
});

// User-Management - Role Menu
router.get('/menu', async (req, res) => {
    res.status(200);
    res.json(getMenu);
});

router.get('/role', async (req, res) => {
    res.status(200);
    res.json(getRole);
});

// Analyze Spread Data Dummy
router.get('/analyze-spread', async (req, res) => {
    res.status(200);
    res.json(analyzeSpread);
});

// CEO > Dashboard Dummy
router.get('/dashboard', async (req, res) => {
    res.status(200);
    res.json(dashboard);
});

// Trailing > Auto Config
router.get('/auto-config', async (req, res) => {
    res.status(200);
    res.json(autoConfig);
});

// Trailing > Account Position > Net Position
router.get('/net-position-dialog', async (req, res) => {
    res.status(200);
    res.json(netPositionDialog);
});

router.get('/slippage', async (req, res) => {
    res.status(200);
    res.json(slippage);
});

// Scoring > Triggered Report
router.get('/triggered-report', async (req, res) => {
    res.status(200);
    res.json(triggeredReport);
});

router.get('/detail-scalper', async (req, res) => {
    res.status(200);
    res.json(detailScalper);
});

router.get('/detail-avprofit', async (req, res) => {
    res.status(200);
    res.json(detailAVProfit);
});

router.get('/detail-related-account', async (req, res) => {
    res.status(200);
    res.json(detailRelatedAccount);
});

router.get('/detail-open-position', async (req, res) => {
    res.status(200);
    res.json(detailOpenPosition);
});

// Report > Tick Account
router.get('/tick-account', async (req, res) => {
    res.status(200);
    res.json(tickAccount);
});

// Settings > Time Alignment
// Daylight Saving
router.get('/daylight-saving', async (req, res) => {
    res.status(200);
    res.json(getDaylightSaving);
});

router.post('/daylight-saving', async (req, res) => {
    res.status(200);
    res.json(postDaylightSaving);
});

// ProfileA > Account
router.get('/log', async (req, res) => {
    res.status(200);
    res.json(logAccountProfileA);
});

// Report > Net Volume
router.get('/net-volume', async (req, res) => {
    res.status(200);
    res.json(netVolume);
});

// Report > Profile A
router.get('/report-profilea', async (req, res) => {
    res.status(200);
    res.json(profileA);
});

// Report > Equity Highest Lowest
router.get('/equity-highest-lowest', async (req, res) => {
    res.status(200);
    res.json(equityHighestLowest);
});

// V2 > get Menu
router.get('/v2-menu', async (req, res) => {
    res.status(200);
    res.json(dataMenuV2);
});

// STP Queue > Status
router.get('/stp-queue', async (req, res) => {
    const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    const database = client.db('afridho-api-dev');
    const collection = database.collection('dummy');
    const response = await collection.find({}).toArray();

    const displayData = {
        status: 'success',
        message: 'Successfully',
        data: response,
    };

    res.status(200);
    res.json(displayData);
});

// Alert Dashboard > Severity Alert
router.get('/severity-alert', async (req, res) => {
    const { severity, page } = req.query;
    const query = severity;
    const pageNumber = page || 1;
    const result = severityAlert.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    let dataSeverity;
    if (query) {
        const severityType = query.charAt(0).toUpperCase() + query.slice(1);
        if (query) {
            const tempData = result.filter((item) => item.severity === severityType);
            dataSeverity = tempData.map(({ checked_by, checked_at, ...rest }) => rest);
        }
    }
    const totalData = query ? dataSeverity.length : result.length;

    const per_page = 5;
    const totalPages = Math.ceil(totalData / per_page);

    const data = {
        status: 'success',
        message: 'Successfully',
        data: {
            current_page: Number(pageNumber),
            data: query ? dataSeverity : result,
            first_page_url: 'https://afridho-api.vercel.app/api/dummy/severity-alert?page=1',
            from: 1,
            last_page: Number(totalPages),
            last_page_url: 'https://afridho-api.vercel.app/api/dummy/severity-alert?page=1',
            links: [
                {
                    url: null,
                    label: '&laquo; Previous',
                    active: false,
                },
                {
                    url: 'https://afridho-api.vercel.app/api/dummy/severity-alert?page=1',
                    label: '1',
                    active: true,
                },
                {
                    url: null,
                    label: 'Next &raquo;',
                    active: false,
                },
            ],
            next_page_url: null,
            path: 'https://afridho-api.vercel.app/api/dummy/severity-alert',
            per_page,
            prev_page_url: null,
            to: 2,
            total: Number(totalData),
        },
    };

    res.status(200);
    res.json(data);
});

router.get('/severity-alert-detail', async (req, res) => {
    const { id } = req.query;
    const data = severityAlert.find((obj) => obj.account == id) ?? [];
    res.status(200);
    res.json(data);
});

router.get('/severity-event-detail', async (req, res) => {
    const data = severityEventDetail;
    res.status(200);
    res.json(data);
});

router.get('/severity-triggered-report', async (req, res) => {
    const data = severityTriggeredReport;
    res.status(200);
    res.json(data);
});

router.get('/severity-closed-transaction', async (req, res) => {
    const data = severityClosedTransactions;
    res.status(200);
    res.json(data);
});

router.get('/severity-open-trades', async (req, res) => {
    const data = severityOpenTrades;
    res.status(200);
    res.json(data);
});

router.get('/severity-history', async (req, res) => {
    const data = severityHistory;
    res.status(200);
    res.json(data);
});

router.get('/account-status', async (req, res) => {
    res.status(200);
    res.json(assessmentAccountStatus);
});

module.exports = router;
