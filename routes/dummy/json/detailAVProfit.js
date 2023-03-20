var data = {
    "current_page": 1,
    "data": [
        {
            "server": "MT4IN4",
            "login": 1117140,
            "ticket": 11758572,
            "symbol": "XAUUSD.m",
            "volume": 5,
            "lot": 0.05,
            "open_time": "2023-02-15 12:10:34",
            "close_time": "1970-01-01 00:00:00",
            "open_price": 1837.07,
            "close_price": 1837.14,
            "score": 0,
            "score_close": 0,
            "result": "0.00000",
            "result_close": "0.00000",
            "note": [],
            "note_close": [],
            "cmd": "Sell",
            "open_target": {
                "ticket" : 'TICKET BOS',
                "cmd": 'Buy',
                "open_time": '2023-02-15 12:10:31',
                "open_price": 1834,
                "volume": 2
            },
            "close_target": {
                "ticket" : 'TICKET OUTT',
                "cmd": 'Sell',
                "open_time": '2023-02-15 12:10:31',
                "open_price": 2121,
                "volume": 3
            }
        },
        {
            "server": "MT4IN1",
            "login": 'XXXX',
            "ticket": 241241,
            "symbol": "XAUUSD.m",
            "volume": 5,
            "lot": 0.05,
            "open_time": "2023-02-15 12:10:34",
            "close_time": "1970-01-01 00:00:00",
            "open_price": 1837.07,
            "close_price": 1837.14,
            "score": 0,
            "score_close": 0,
            "result": "0.00000",
            "result_close": "0.00000",
            "note": [],
            "note_close": [],
            "cmd": "Sell",
            "open_target": {
                "ticket" : 'DUMMY OPEN',
                "cmd": 'Sell',
                "open_time": '2023-02-15 12:10:31',
                "open_price": 2112,
                "volume": 2
            },
            "close_target": {
                "ticket" : 'TICKET OUTT',
                "cmd": 'Buy',
                "open_time": '2023-02-15 12:10:31',
                "open_price": 444,
                "volume": 5
            }
        }
    ],
    "first_page_url": "https://rpt-rmv3-dev.surya-am.com/api/v1/triggered-report/av-profit/1117140/MT4IN4?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://rpt-rmv3-dev.surya-am.com/api/v1/triggered-report/av-profit/1117140/MT4IN4?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://rpt-rmv3-dev.surya-am.com/api/v1/triggered-report/av-profit/1117140/MT4IN4?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://rpt-rmv3-dev.surya-am.com/api/v1/triggered-report/av-profit/1117140/MT4IN4",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}

module.exports = data