var data = {
    current_page: 1,
    data: [
        {
            server: 'MT4DEV',
            login: 2007967926,
            tickets: 45,
            symbols: 1,
            lots: 0.45,
            actions: ['Add Credit', 'Reopen'],
        },
    ],
    first_page_url:
        'https://rpt-rm-dev.surya-am.com/api/v1/revert/trade-correction?start_time=2024-07-25%2009%3A56%3A00&end_time=2024-07-25%2010%3A41%3A53&per_page=1000&is_reload=1&sort=server&sort_type=asc&page=1&servers%5B0%5D=MT4DEV&symbol=XAUUSD.m',
    from: 1,
    last_page: 1,
    last_page_url:
        'https://rpt-rm-dev.surya-am.com/api/v1/revert/trade-correction?start_time=2024-07-25%2009%3A56%3A00&end_time=2024-07-25%2010%3A41%3A53&per_page=1000&is_reload=1&sort=server&sort_type=asc&page=1&servers%5B0%5D=MT4DEV&symbol=XAUUSD.m',
    links: [
        {
            url: null,
            label: '&laquo; Previous',
            active: false,
        },
        {
            url: 'https://rpt-rm-dev.surya-am.com/api/v1/revert/trade-correction?start_time=2024-07-25%2009%3A56%3A00&end_time=2024-07-25%2010%3A41%3A53&per_page=1000&is_reload=1&sort=server&sort_type=asc&page=1&servers%5B0%5D=MT4DEV&symbol=XAUUSD.m',
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
    path: 'https://rpt-rm-dev.surya-am.com/api/v1/revert/trade-correction',
    per_page: 1000,
    prev_page_url: null,
    to: 1,
    total: 1,
};

module.exports = data;
