const express = require("express");
const router = express.Router();
const analyzeSpread = require("./json/analyzeSpread")
const dashboard = require("./json/dashboard")
const autoConfig = require("./json/autoConfig")
const netPositionDialog = require("./json/NetPositionDialog")
const slippage = require("./json/slippage")
const triggeredReport = require("./json/triggeredReport")
const detailScalper = require("./json/detailScalper")
const detailAVProfit = require("./json/detailAVProfit")
const detailOpenPosition = require("./json/detailOpenPosition")
const detailRelatedAccount = require("./json/detailRelatedAccount")
require('dotenv').config()

router.get("/", async (req, res) =>{
    res.status(200)
    res.json({status : 'it works'});  
}
);

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

module.exports = router;