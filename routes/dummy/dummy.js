const express = require("express");
const router = express.Router();
const analyzeSpread = require("./json/analyzeSpread")
const dashboard = require("./json/dashboard")
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


module.exports = router;