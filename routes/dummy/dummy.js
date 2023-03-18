const express = require("express");
const router = express.Router();
const analyzeSpread = require("./json/analyzeSpread")
const dashboard = require("./json/dashboard")
const netPositionDialog = require("./json/NetPositionDialog")
const slippage = require("./json/slippage")
const triggeredReport = require("./json/triggeredReport")
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


module.exports = router;