const express = require("express");
const router = express.Router();
const analyzeSpread = require("./json/analyzeSpread")
const dashboard = require("./json/dashboard")
const slippage = require("./json/slippage")
const tickAccount = require("./json/tickAccount")
const getMenu = require("./json/getMenu")
const getRole = require("./json/getRole")
const { triggeredReport, detailScalper, detailAVProfit, detailOpenPosition, detailRelatedAccount } = require("./json/triggeredReport")
const { logAccountProfileA, equityHighestLowest } = require("./json/profileA")
const { autoConfig } = require("./json/autoConfig")
const { netPositionDialog } = require("./json/NetPositionDialog")
const { getDaylightSaving , postDaylightSaving } = require("./json/time-alignment")
const { netVolume, profileA } = require("./json/report")
const dataMenuV2 = require("./json/v2")
require('dotenv').config()

router.get("/", async (req, res) =>{
    res.status(200)
    res.json({status : 'it works'});  
}
);

// User-Management - Role Menu
router.get("/menu", async (req, res) =>{
    res.status(200)
    res.json(getMenu)  
});

router.get("/role", async (req, res) =>{
    res.status(200)
    res.json(getRole)  
});

// Analyze Spread Data Dummy
router.get("/analyze-spread", async (req, res) =>{
    res.status(200)
    res.json(analyzeSpread)
    
});

// CEO > Dashboard Dummy
router.get("/dashboard", async (req, res) =>{
    res.status(200)
    res.json(dashboard)
    
});

// Trailing > Auto Config
router.get("/auto-config", async (req, res) =>{
    res.status(200)
    res.json(autoConfig)
});

// Trailing > Account Position > Net Position
router.get("/net-position-dialog", async (req, res) =>{
    res.status(200)
    res.json(netPositionDialog)
    
});

router.get("/slippage", async (req, res) =>{
    res.status(200)
    res.json(slippage)
});

// Scoring > Triggered Report
router.get("/triggered-report", async (req, res) =>{
    res.status(200)
    res.json(triggeredReport)
});

router.get("/detail-scalper", async (req, res) =>{
    res.status(200)
    res.json(detailScalper)   
})

router.get("/detail-avprofit", async (req, res) =>{
    res.status(200)
    res.json(detailAVProfit)
})

router.get("/detail-related-account", async (req, res) =>{
    res.status(200)
    res.json(detailRelatedAccount)
})

router.get("/detail-open-position", async (req, res) =>{
    res.status(200)
    res.json(detailOpenPosition)
})

// Report > Tick Account
router.get("/tick-account", async (req, res) =>{
    res.status(200)
    res.json(tickAccount)
})

// Settings > Time Alignment
// Daylight Saving
router.get("/daylight-saving", async (req, res) =>{
    res.status(200)
    res.json(getDaylightSaving)
})

router.post("/daylight-saving", async (req, res) =>{
    res.status(200)
    res.json(postDaylightSaving)
})

// ProfileA > Account
router.get("/log", async (req, res) =>{
    res.status(200)
    res.json(logAccountProfileA)
})


// Report > Net Volume
router.get("/net-volume", async (req, res) =>{
    res.status(200)
    res.json(netVolume)
})

// Report > Profile A
router.get("/report-profilea", async (req, res) =>{
    res.status(200)
    res.json(profileA)
})

// Report > Equity Highest Lowest
router.get("/equity-highest-lowest", async (req, res) =>{
    res.status(200)
    res.json(equityHighestLowest)
})

// V2 > get Menu
router.get("/v2-menu", async (req, res) =>{
    res.status(200)
    res.json(dataMenuV2)
})


module.exports = router;