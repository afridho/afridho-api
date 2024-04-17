var data = [
    {
        server: 'MT4IN2',
        login: 92257620,
        ticket: 13168215,
        symbol: 'XAUUSD.m',
        lot: 0.1,
        open_time: '2024-03-17 12:11:12',
        open_price: 2005.75,
        close_time: '2024-03-17 14:11:12',
        close_price: 2008.22,
        type: 'Market',
        action: ['Reopen', 'Adjust PL'],
    },
    {
        server: 'MT4IN3',
        login: 92456749,
        ticket: 1316890,
        symbol: 'XAUUSD.m',
        lot: 0.3,
        open_time: '2024-03-17 12:11:34',
        open_price: 100.23,
        close_time: '2024-03-17 15:10:11',
        close_price: 2008.22,
        type: 'Market',
        action: ['Revert Pending Sell Stop', 'Adjust Open Price', 'Adjust Close Price'],
    },
];

module.exports = data;
