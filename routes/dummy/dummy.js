const express = require("express");
const router = express.Router();
require('dotenv').config()

router.get("/", async (req, res) =>{
    res.status(200)
    res.json({status : 'it works'});  
}
);

router.get("/analyze-spread", async (req, res) =>{
    res.status(200)
    res.json([{
        "symbol" : "GBPJPY.m",
        "data": [
            {
                "DATE": "2023-01-08",
                "SYMBOL": "GBPJPY.m",
                "MODUS": "39",
                "HIGHEST": "160671",
                "LOWEST": "160671",
                "AVERAGE": "39",
                "NUMBER_OF_TICKS": 1,
                "VOLATILITY_AVERAGE": 0,
                "VOLATILITY_POINT": 0,
                "OPPORTUNITY": 0
            },
            {
                "DATE": "2023-01-09",
                "SYMBOL": "GBPJPY.m",
                "MODUS": "39",
                "HIGHEST": "160671",
                "LOWEST": "160671",
                "AVERAGE": "20",
                "NUMBER_OF_TICKS": 2,
                "VOLATILITY_AVERAGE": 0,
                "VOLATILITY_POINT": 0,
                "OPPORTUNITY": 0
            },
            {
                "DATE": "2023-01-10",
                "SYMBOL": "GBPJPY.m",
                "MODUS": "39",
                "HIGHEST": "160671",
                "LOWEST": "160671",
                "AVERAGE": "13",
                "NUMBER_OF_TICKS": 3,
                "VOLATILITY_AVERAGE": 0,
                "VOLATILITY_POINT": 0,
                "OPPORTUNITY": 0
            }
          ],
        "MODUS_AVG": 11.7,
        "HIGHEST_AVG": 48201.3,
        "LOWEST_AVG": 48201.3,
        "AVERAGE_AVG": 7.2,
        "NUMBER_OF_TICKS_AVG": 0.6,
        "VOLATILITY_AVERAGE_AVG": 0,
        "VOLATILITY_POINT_AVG": 0,
        "OPPORTUNITY_AVG": 0,
        "DAYCOUNT": 3
      },
      {
        "symbol" : "AUDUSD",
        "data": [
            {
                "DATE": "2023-01-08",
                "SYMBOL": "AUDUSD",
                "MODUS": "39",
                "HIGHEST": "160671",
                "LOWEST": "160671",
                "AVERAGE": "39",
                "NUMBER_OF_TICKS": 1,
                "VOLATILITY_AVERAGE": 0,
                "VOLATILITY_POINT": 0,
                "OPPORTUNITY": 0
            },
            {
                "DATE": "2023-01-09",
                "SYMBOL": "AUDUSD",
                "MODUS": "39",
                "HIGHEST": "160671",
                "LOWEST": "160671",
                "AVERAGE": "20",
                "NUMBER_OF_TICKS": 2,
                "VOLATILITY_AVERAGE": 0,
                "VOLATILITY_POINT": 0,
                "OPPORTUNITY": 0
            },
            {
                "DATE": "2023-01-10",
                "SYMBOL": "AUDUSD",
                "MODUS": "39",
                "HIGHEST": "160671",
                "LOWEST": "160671",
                "AVERAGE": "13",
                "NUMBER_OF_TICKS": 3,
                "VOLATILITY_AVERAGE": 0,
                "VOLATILITY_POINT": 0,
                "OPPORTUNITY": 0
            }
          ],
        "MODUS_AVG": 11.7,
        "HIGHEST_AVG": 48201.3,
        "LOWEST_AVG": 48201.3,
        "AVERAGE_AVG": 7.2,
        "NUMBER_OF_TICKS_AVG": 0.6,
        "VOLATILITY_AVERAGE_AVG": 0,
        "VOLATILITY_POINT_AVG": 0,
        "OPPORTUNITY_AVG": 0,
        "DAYCOUNT": 3
      }]);
    
});


module.exports = router;