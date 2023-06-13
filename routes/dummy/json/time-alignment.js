var getDaylightSaving = {
    "dst": false,
    "diff": 5,
    "from": null,
    "to": null,
    "open_market": "05:00:00",
    "close_market": "04:59:59"
}

var postDaylightSaving = {
    "message": "Updated",
    "data": {
        "dst": true,
        "diff": 4,
        "from": "2023-05-31",
        "to": "2023-06-01",
        "open_market": "04:00:00",
        "close_market": "03:59:59"
    }
}

module.exports = { getDaylightSaving, postDaylightSaving }