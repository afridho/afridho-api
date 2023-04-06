var data = {
    "status": "success",
    "message": "Successfully",
    "data": [
        {
            "id": 1,
            "icon": "home",
            "url": "/dashboards",
            "type": "collapse",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "Home",
            "mode": "parent",
            "permissions": [
                {
                    "id": 1,
                    "menu_id": 1,
                    "name": "View",
                    "action": "home.view",
                    "value": true
                },
                {
                    "id": 2,
                    "menu_id": 1,
                    "name": "Add",
                    "action": "home.add",
                    "value": true
                },
                {
                    "id": 3,
                    "menu_id": 1,
                    "name": "Edit",
                    "action": "home.edit",
                    "value": true
                },
                {
                    "id": 4,
                    "menu_id": 1,
                    "name": "Delete",
                    "action": "home.delete",
                    "value": true
                }
            ],
            "sub": []
        },
        {
            "id": 2,
            "icon": "home",
            "url": null,
            "type": "collapse",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "Ceo Dashboard",
            "mode": "parent",
            "permissions": [
                {
                    "id": 5,
                    "menu_id": 2,
                    "name": "View",
                    "action": "ceo.view",
                    "value": true
                },
                {
                    "id": 6,
                    "menu_id": 2,
                    "name": "Add",
                    "action": "ceo.add",
                    "value": true
                },
                {
                    "id": 7,
                    "menu_id": 2,
                    "name": "Edit",
                    "action": "ceo.edit",
                    "value": true
                },
                {
                    "id": 8,
                    "menu_id": 2,
                    "name": "Delete",
                    "action": "ceo.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 3,
                    "icon": "home",
                    "url": "/ceo/dashboard",
                    "type": "item",
                    "parent_id": 2,
                    "tab": [],
                    "active": 1,
                    "title": "Dashboard",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 9,
                            "menu_id": 3,
                            "name": "View",
                            "action": "ceo-dashboard.view",
                            "value": true
                        },
                        {
                            "id": 10,
                            "menu_id": 3,
                            "name": "Add",
                            "action": "ceo-dashboard.add",
                            "value": true
                        },
                        {
                            "id": 11,
                            "menu_id": 3,
                            "name": "Edit",
                            "action": "ceo-dashboard.edit",
                            "value": true
                        },
                        {
                            "id": 12,
                            "menu_id": 3,
                            "name": "Delete",
                            "action": "ceo-dashboard.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 4,
                    "icon": "home",
                    "url": "/ceo/conversion",
                    "type": "item",
                    "parent_id": 2,
                    "tab": [],
                    "active": 1,
                    "title": "Conversion",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 13,
                            "menu_id": 4,
                            "name": "View",
                            "action": "convertion.view",
                            "value": true
                        },
                        {
                            "id": 14,
                            "menu_id": 4,
                            "name": "Add",
                            "action": "convertion.add",
                            "value": true
                        },
                        {
                            "id": 15,
                            "menu_id": 4,
                            "name": "Edit",
                            "action": "convertion.edit",
                            "value": true
                        },
                        {
                            "id": 16,
                            "menu_id": 4,
                            "name": "Delete",
                            "action": "convertion.delete",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "id": 5,
            "icon": "assignment",
            "url": null,
            "type": "collapse",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "Report",
            "mode": "parent",
            "permissions": [
                {
                    "id": 17,
                    "menu_id": 5,
                    "name": "View",
                    "action": "report.view",
                    "value": true
                },
                {
                    "id": 18,
                    "menu_id": 5,
                    "name": "Add",
                    "action": "report.add",
                    "value": true
                },
                {
                    "id": 19,
                    "menu_id": 5,
                    "name": "Edit",
                    "action": "report.edit",
                    "value": true
                },
                {
                    "id": 20,
                    "menu_id": 5,
                    "name": "Delete",
                    "action": "report.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 6,
                    "icon": "home",
                    "url": "/report/analyze-spread",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Analyze Spread",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 21,
                            "menu_id": 6,
                            "name": "View",
                            "action": "analyze-spread.view",
                            "value": true
                        },
                        {
                            "id": 22,
                            "menu_id": 6,
                            "name": "Add",
                            "action": "analyze-spread.add",
                            "value": true
                        },
                        {
                            "id": 23,
                            "menu_id": 6,
                            "name": "Edit",
                            "action": "analyze-spread.edit",
                            "value": true
                        },
                        {
                            "id": 24,
                            "menu_id": 6,
                            "name": "Delete",
                            "action": "analyze-spread.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 7,
                    "icon": "home",
                    "url": "/report/ma-info",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "MA Info",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 25,
                            "menu_id": 7,
                            "name": "View",
                            "action": "ma-Info.view",
                            "value": true
                        },
                        {
                            "id": 26,
                            "menu_id": 7,
                            "name": "Add",
                            "action": "ma-Info.add",
                            "value": true
                        },
                        {
                            "id": 27,
                            "menu_id": 7,
                            "name": "Edit",
                            "action": "ma-Info.edit",
                            "value": true
                        },
                        {
                            "id": 28,
                            "menu_id": 7,
                            "name": "Delete",
                            "action": "ma-Info.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 8,
                    "icon": "home",
                    "url": "/report/daily-history",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Daily History",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 29,
                            "menu_id": 8,
                            "name": "View",
                            "action": "daily-history.view",
                            "value": true
                        },
                        {
                            "id": 30,
                            "menu_id": 8,
                            "name": "Add",
                            "action": "daily-history.add",
                            "value": true
                        },
                        {
                            "id": 31,
                            "menu_id": 8,
                            "name": "Edit",
                            "action": "daily-history.edit",
                            "value": true
                        },
                        {
                            "id": 32,
                            "menu_id": 8,
                            "name": "Delete",
                            "action": "daily-history.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 9,
                    "icon": "home",
                    "url": "/report/daily-report",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Daily Report",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 33,
                            "menu_id": 9,
                            "name": "View",
                            "action": "daily-report.view",
                            "value": true
                        },
                        {
                            "id": 34,
                            "menu_id": 9,
                            "name": "Add",
                            "action": "daily-report.add",
                            "value": true
                        },
                        {
                            "id": 35,
                            "menu_id": 9,
                            "name": "Edit",
                            "action": "daily-report.edit",
                            "value": true
                        },
                        {
                            "id": 36,
                            "menu_id": 9,
                            "name": "Delete",
                            "action": "daily-report.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 10,
                    "icon": "home",
                    "url": "/report/big-lot",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Big Lot",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 37,
                            "menu_id": 10,
                            "name": "View",
                            "action": "big-lot.view",
                            "value": true
                        },
                        {
                            "id": 38,
                            "menu_id": 10,
                            "name": "Add",
                            "action": "big-lot.add",
                            "value": true
                        },
                        {
                            "id": 39,
                            "menu_id": 10,
                            "name": "Edit",
                            "action": "big-lot.edit",
                            "value": true
                        },
                        {
                            "id": 40,
                            "menu_id": 10,
                            "name": "Delete",
                            "action": "big-lot.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 11,
                    "icon": "home",
                    "url": "/report/tick-account",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Tick Account",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 41,
                            "menu_id": 11,
                            "name": "View",
                            "action": "tick-account.view",
                            "value": true
                        },
                        {
                            "id": 42,
                            "menu_id": 11,
                            "name": "Add",
                            "action": "tick-account.add",
                            "value": true
                        },
                        {
                            "id": 43,
                            "menu_id": 11,
                            "name": "Edit",
                            "action": "tick-account.edit",
                            "value": true
                        },
                        {
                            "id": 44,
                            "menu_id": 11,
                            "name": "Delete",
                            "action": "tick-account.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 12,
                    "icon": "home",
                    "url": "/report/slippage",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Slippage",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 45,
                            "menu_id": 12,
                            "name": "View",
                            "action": "slippage.view",
                            "value": true
                        },
                        {
                            "id": 46,
                            "menu_id": 12,
                            "name": "Add",
                            "action": "slippage.add",
                            "value": true
                        },
                        {
                            "id": 47,
                            "menu_id": 12,
                            "name": "Edit",
                            "action": "slippage.edit",
                            "value": true
                        },
                        {
                            "id": 48,
                            "menu_id": 12,
                            "name": "Delete",
                            "action": "slippage.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 13,
                    "icon": "home",
                    "url": "/report/free-margin",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Free Margin",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 49,
                            "menu_id": 13,
                            "name": "View",
                            "action": "free-margin.view",
                            "value": true
                        },
                        {
                            "id": 50,
                            "menu_id": 13,
                            "name": "Add",
                            "action": "free-margin.add",
                            "value": true
                        },
                        {
                            "id": 51,
                            "menu_id": 13,
                            "name": "Edit",
                            "action": "free-margin.edit",
                            "value": true
                        },
                        {
                            "id": 52,
                            "menu_id": 13,
                            "name": "Delete",
                            "action": "free-margin.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 14,
                    "icon": "home",
                    "url": "/report/stopout",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Stopout",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 53,
                            "menu_id": 14,
                            "name": "View",
                            "action": "stopout.view",
                            "value": true
                        },
                        {
                            "id": 54,
                            "menu_id": 14,
                            "name": "Add",
                            "action": "stopout.add",
                            "value": true
                        },
                        {
                            "id": 55,
                            "menu_id": 14,
                            "name": "Edit",
                            "action": "stopout.edit",
                            "value": true
                        },
                        {
                            "id": 56,
                            "menu_id": 14,
                            "name": "Delete",
                            "action": "stopout.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 15,
                    "icon": "home",
                    "url": "/report/open-position",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Open Position",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 57,
                            "menu_id": 15,
                            "name": "View",
                            "action": "open-position.view",
                            "value": true
                        },
                        {
                            "id": 58,
                            "menu_id": 15,
                            "name": "Add",
                            "action": "open-position.add",
                            "value": true
                        },
                        {
                            "id": 59,
                            "menu_id": 15,
                            "name": "Edit",
                            "action": "open-position.edit",
                            "value": true
                        },
                        {
                            "id": 60,
                            "menu_id": 15,
                            "name": "Delete",
                            "action": "open-position.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 16,
                    "icon": "home",
                    "url": "/report/net-volume",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Net Volume",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 61,
                            "menu_id": 16,
                            "name": "View",
                            "action": "net-volume.view",
                            "value": true
                        },
                        {
                            "id": 62,
                            "menu_id": 16,
                            "name": "Add",
                            "action": "net-volume.add",
                            "value": true
                        },
                        {
                            "id": 63,
                            "menu_id": 16,
                            "name": "Edit",
                            "action": "net-volume.edit",
                            "value": true
                        },
                        {
                            "id": 64,
                            "menu_id": 16,
                            "name": "Delete",
                            "action": "net-volume.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 17,
                    "icon": "home",
                    "url": "/report/profilea",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Profile A",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 65,
                            "menu_id": 17,
                            "name": "View",
                            "action": "report-profileA.view",
                            "value": true
                        },
                        {
                            "id": 66,
                            "menu_id": 17,
                            "name": "Add",
                            "action": "report-profileA.add",
                            "value": true
                        },
                        {
                            "id": 67,
                            "menu_id": 17,
                            "name": "Edit",
                            "action": "report-profileA.edit",
                            "value": true
                        },
                        {
                            "id": 68,
                            "menu_id": 17,
                            "name": "Delete",
                            "action": "report-profileA.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 18,
                    "icon": "home",
                    "url": "/report/reopen-trades",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Reopen Trades",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 69,
                            "menu_id": 18,
                            "name": "View",
                            "action": "reopen-trades.view",
                            "value": true
                        },
                        {
                            "id": 70,
                            "menu_id": 18,
                            "name": "Add",
                            "action": "reopen-trades.add",
                            "value": true
                        },
                        {
                            "id": 71,
                            "menu_id": 18,
                            "name": "Edit",
                            "action": "reopen-trades.edit",
                            "value": true
                        },
                        {
                            "id": 72,
                            "menu_id": 18,
                            "name": "Delete",
                            "action": "reopen-trades.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 19,
                    "icon": "home",
                    "url": "/report/deleted-trades",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Deleted Trades",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 73,
                            "menu_id": 19,
                            "name": "View",
                            "action": "deleted-trades.view",
                            "value": true
                        },
                        {
                            "id": 74,
                            "menu_id": 19,
                            "name": "Add",
                            "action": "deleted-trades.add",
                            "value": true
                        },
                        {
                            "id": 75,
                            "menu_id": 19,
                            "name": "Edit",
                            "action": "deleted-trades.edit",
                            "value": true
                        },
                        {
                            "id": 76,
                            "menu_id": 19,
                            "name": "Delete",
                            "action": "deleted-trades.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 20,
                    "icon": "home",
                    "url": "/report/mtm-journal",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "MTM Journal",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 77,
                            "menu_id": 20,
                            "name": "View",
                            "action": "mtm-journal.view",
                            "value": true
                        },
                        {
                            "id": 78,
                            "menu_id": 20,
                            "name": "Add",
                            "action": "mtm-journal.add",
                            "value": true
                        },
                        {
                            "id": 79,
                            "menu_id": 20,
                            "name": "Edit",
                            "action": "mtm-journal.edit",
                            "value": true
                        },
                        {
                            "id": 80,
                            "menu_id": 20,
                            "name": "Delete",
                            "action": "mtm-journal.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 21,
                    "icon": "home",
                    "url": "/report/modified-pending-ticket",
                    "type": "item",
                    "parent_id": 5,
                    "tab": [],
                    "active": 1,
                    "title": "Modified Pending Ticket",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 81,
                            "menu_id": 21,
                            "name": "View",
                            "action": "modified-pending-ticket.view",
                            "value": true
                        },
                        {
                            "id": 82,
                            "menu_id": 21,
                            "name": "Add",
                            "action": "modified-pending-ticket.add",
                            "value": true
                        },
                        {
                            "id": 83,
                            "menu_id": 21,
                            "name": "Edit",
                            "action": "modified-pending-ticket.edit",
                            "value": true
                        },
                        {
                            "id": 84,
                            "menu_id": 21,
                            "name": "Delete",
                            "action": "modified-pending-ticket.delete",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "id": 22,
            "icon": "stars",
            "url": null,
            "type": "collapse",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "ProfileA",
            "mode": "parent",
            "permissions": [
                {
                    "id": 85,
                    "menu_id": 22,
                    "name": "View",
                    "action": "profileA.view",
                    "value": true
                },
                {
                    "id": 86,
                    "menu_id": 22,
                    "name": "Add",
                    "action": "profileA.add",
                    "value": true
                },
                {
                    "id": 87,
                    "menu_id": 22,
                    "name": "Edit",
                    "action": "profileA.edit",
                    "value": true
                },
                {
                    "id": 88,
                    "menu_id": 22,
                    "name": "Delete",
                    "action": "profileA.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 23,
                    "icon": "home",
                    "url": "/profilea/accounts",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Accounts",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 89,
                            "menu_id": 23,
                            "name": "View",
                            "action": "profileA-account.view",
                            "value": true
                        },
                        {
                            "id": 90,
                            "menu_id": 23,
                            "name": "Add",
                            "action": "profileA-account.add",
                            "value": true
                        },
                        {
                            "id": 91,
                            "menu_id": 23,
                            "name": "Edit",
                            "action": "profileA-account.edit",
                            "value": true
                        },
                        {
                            "id": 92,
                            "menu_id": 23,
                            "name": "Delete",
                            "action": "profileA-account.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 24,
                    "icon": "home",
                    "url": "/profilea/accounts-disabled",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Accounts Disabled",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 93,
                            "menu_id": 24,
                            "name": "View",
                            "action": "profileA-account-disabled.view",
                            "value": true
                        },
                        {
                            "id": 94,
                            "menu_id": 24,
                            "name": "Add",
                            "action": "profileA-account-disabled.add",
                            "value": true
                        },
                        {
                            "id": 95,
                            "menu_id": 24,
                            "name": "Edit",
                            "action": "profileA-account-disabled.edit",
                            "value": true
                        },
                        {
                            "id": 96,
                            "menu_id": 24,
                            "name": "Delete",
                            "action": "profileA-account-disabled.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 25,
                    "icon": "home",
                    "url": "/profilea/group-trades",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Group Trades",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 97,
                            "menu_id": 25,
                            "name": "View",
                            "action": "group-trades.view",
                            "value": true
                        },
                        {
                            "id": 98,
                            "menu_id": 25,
                            "name": "Add",
                            "action": "group-trades.add",
                            "value": true
                        },
                        {
                            "id": 99,
                            "menu_id": 25,
                            "name": "Edit",
                            "action": "group-trades.edit",
                            "value": true
                        },
                        {
                            "id": 100,
                            "menu_id": 25,
                            "name": "Delete",
                            "action": "group-trades.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 26,
                    "icon": "home",
                    "url": "/profilea/equity-highest-lowest",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Equity Highest Lowest",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 101,
                            "menu_id": 26,
                            "name": "View",
                            "action": "equity-highest-lowest.view",
                            "value": true
                        },
                        {
                            "id": 102,
                            "menu_id": 26,
                            "name": "Add",
                            "action": "equity-highest-lowest.add",
                            "value": true
                        },
                        {
                            "id": 103,
                            "menu_id": 26,
                            "name": "Edit",
                            "action": "equity-highest-lowest.edit",
                            "value": true
                        },
                        {
                            "id": 104,
                            "menu_id": 26,
                            "name": "Delete",
                            "action": "equity-highest-lowest.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 27,
                    "icon": "home",
                    "url": "/profilea/equity-record",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Equity Record",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 105,
                            "menu_id": 27,
                            "name": "View",
                            "action": "equity-record.view",
                            "value": true
                        },
                        {
                            "id": 106,
                            "menu_id": 27,
                            "name": "Add",
                            "action": "equity-record.add",
                            "value": true
                        },
                        {
                            "id": 107,
                            "menu_id": 27,
                            "name": "Edit",
                            "action": "equity-record.edit",
                            "value": true
                        },
                        {
                            "id": 108,
                            "menu_id": 27,
                            "name": "Delete",
                            "action": "equity-record.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 28,
                    "icon": "home",
                    "url": "/profilea/equity-trigger-history",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Equity Trigger History",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 109,
                            "menu_id": 28,
                            "name": "View",
                            "action": "equity-trigger-history.view",
                            "value": true
                        },
                        {
                            "id": 110,
                            "menu_id": 28,
                            "name": "Add",
                            "action": "equity-trigger-history.add",
                            "value": true
                        },
                        {
                            "id": 111,
                            "menu_id": 28,
                            "name": "Edit",
                            "action": "equity-trigger-history.edit",
                            "value": true
                        },
                        {
                            "id": 112,
                            "menu_id": 28,
                            "name": "Delete",
                            "action": "equity-trigger-history.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 29,
                    "icon": "home",
                    "url": "/profilea/file-source",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "File Source",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 113,
                            "menu_id": 29,
                            "name": "View",
                            "action": "file-source.view",
                            "value": true
                        },
                        {
                            "id": 114,
                            "menu_id": 29,
                            "name": "Add",
                            "action": "file-source.add",
                            "value": true
                        },
                        {
                            "id": 115,
                            "menu_id": 29,
                            "name": "Edit",
                            "action": "file-source.edit",
                            "value": true
                        },
                        {
                            "id": 116,
                            "menu_id": 29,
                            "name": "Delete",
                            "action": "file-source.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 30,
                    "icon": "home",
                    "url": "/profilea/ftp",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "FTP",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 117,
                            "menu_id": 30,
                            "name": "View",
                            "action": "ftp.view",
                            "value": true
                        },
                        {
                            "id": 118,
                            "menu_id": 30,
                            "name": "Add",
                            "action": "ftp.add",
                            "value": true
                        },
                        {
                            "id": 119,
                            "menu_id": 30,
                            "name": "Edit",
                            "action": "ftp.edit",
                            "value": true
                        },
                        {
                            "id": 120,
                            "menu_id": 30,
                            "name": "Delete",
                            "action": "ftp.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 31,
                    "icon": "home",
                    "url": "/profilea/trade-monitoring",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Trade Monitoring",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 121,
                            "menu_id": 31,
                            "name": "View",
                            "action": "trade-monitoring.view",
                            "value": true
                        },
                        {
                            "id": 122,
                            "menu_id": 31,
                            "name": "Add",
                            "action": "trade-monitoring.add",
                            "value": true
                        },
                        {
                            "id": 123,
                            "menu_id": 31,
                            "name": "Edit",
                            "action": "trade-monitoring.edit",
                            "value": true
                        },
                        {
                            "id": 124,
                            "menu_id": 31,
                            "name": "Delete",
                            "action": "trade-monitoring.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 32,
                    "icon": "home",
                    "url": "/profilea/manual-trigger",
                    "type": "item",
                    "parent_id": 22,
                    "tab": [],
                    "active": 1,
                    "title": "Manual Trigger",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 125,
                            "menu_id": 32,
                            "name": "View",
                            "action": "manual-trigger.view",
                            "value": true
                        },
                        {
                            "id": 126,
                            "menu_id": 32,
                            "name": "Add",
                            "action": "manual-trigger.add",
                            "value": true
                        },
                        {
                            "id": 127,
                            "menu_id": 32,
                            "name": "Edit",
                            "action": "manual-trigger.edit",
                            "value": true
                        },
                        {
                            "id": 128,
                            "menu_id": 32,
                            "name": "Delete",
                            "action": "manual-trigger.delete",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "id": 33,
            "icon": "psychology",
            "url": null,
            "type": "item",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "Trailing",
            "mode": "sub",
            "permissions": [
                {
                    "id": 129,
                    "menu_id": 33,
                    "name": "View",
                    "action": "trailing.view",
                    "value": true
                },
                {
                    "id": 130,
                    "menu_id": 33,
                    "name": "Add",
                    "action": "trailing.add",
                    "value": true
                },
                {
                    "id": 131,
                    "menu_id": 33,
                    "name": "Edit",
                    "action": "trailing.edit",
                    "value": true
                },
                {
                    "id": 132,
                    "menu_id": 33,
                    "name": "Delete",
                    "action": "trailing.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 34,
                    "icon": "home",
                    "url": "/trailing/auto-config",
                    "type": "item",
                    "parent_id": 33,
                    "tab": [],
                    "active": 1,
                    "title": "Auto Config",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 133,
                            "menu_id": 34,
                            "name": "View",
                            "action": "auto-config.view",
                            "value": true
                        },
                        {
                            "id": 134,
                            "menu_id": 34,
                            "name": "Add",
                            "action": "auto-config.add",
                            "value": true
                        },
                        {
                            "id": 135,
                            "menu_id": 34,
                            "name": "Edit",
                            "action": "auto-config.edit",
                            "value": true
                        },
                        {
                            "id": 136,
                            "menu_id": 34,
                            "name": "Delete",
                            "action": "auto-config.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 35,
                    "icon": "home",
                    "url": "/trailing/account-position",
                    "type": "item",
                    "parent_id": 33,
                    "tab": [],
                    "active": 1,
                    "title": "Account Position",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 137,
                            "menu_id": 35,
                            "name": "View",
                            "action": "account-position.view",
                            "value": true
                        },
                        {
                            "id": 138,
                            "menu_id": 35,
                            "name": "Add",
                            "action": "account-position.add",
                            "value": true
                        },
                        {
                            "id": 139,
                            "menu_id": 35,
                            "name": "Edit",
                            "action": "account-position.edit",
                            "value": true
                        },
                        {
                            "id": 140,
                            "menu_id": 35,
                            "name": "Delete",
                            "action": "account-position.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 36,
                    "icon": "home",
                    "url": "/trailing/manual-sync",
                    "type": "item",
                    "parent_id": 33,
                    "tab": [],
                    "active": 1,
                    "title": "Manual Sync",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 141,
                            "menu_id": 36,
                            "name": "View",
                            "action": "manual-sync.view",
                            "value": true
                        },
                        {
                            "id": 142,
                            "menu_id": 36,
                            "name": "Add",
                            "action": "manual-sync.add",
                            "value": true
                        },
                        {
                            "id": 143,
                            "menu_id": 36,
                            "name": "Edit",
                            "action": "manual-sync.edit",
                            "value": true
                        },
                        {
                            "id": 144,
                            "menu_id": 36,
                            "name": "Delete",
                            "action": "manual-sync.delete",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "id": 37,
            "icon": "auto_awesome_mosaic",
            "url": null,
            "type": "item",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "Scoring",
            "mode": "sub",
            "permissions": [
                {
                    "id": 145,
                    "menu_id": 37,
                    "name": "View",
                    "action": "scoring.view",
                    "value": true
                },
                {
                    "id": 146,
                    "menu_id": 37,
                    "name": "Add",
                    "action": "scoring.add",
                    "value": true
                },
                {
                    "id": 147,
                    "menu_id": 37,
                    "name": "Edit",
                    "action": "scoring.edit",
                    "value": true
                },
                {
                    "id": 148,
                    "menu_id": 37,
                    "name": "Delete",
                    "action": "scoring.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 38,
                    "icon": "home",
                    "url": "/scoring/triggered-report",
                    "type": "item",
                    "parent_id": 37,
                    "tab": [],
                    "active": 1,
                    "title": "Triggered Report",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 149,
                            "menu_id": 38,
                            "name": "View",
                            "action": "triggered-report.view",
                            "value": true
                        },
                        {
                            "id": 150,
                            "menu_id": 38,
                            "name": "Add",
                            "action": "triggered-report.add",
                            "value": true
                        },
                        {
                            "id": 151,
                            "menu_id": 38,
                            "name": "Edit",
                            "action": "triggered-report.edit",
                            "value": true
                        },
                        {
                            "id": 152,
                            "menu_id": 38,
                            "name": "Delete",
                            "action": "triggered-report.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 39,
                    "icon": "home",
                    "url": "/scoring/last-triggered",
                    "type": "item",
                    "parent_id": 37,
                    "tab": [],
                    "active": 1,
                    "title": "Last Triggered",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 153,
                            "menu_id": 39,
                            "name": "View",
                            "action": "last-triggered.view",
                            "value": true
                        },
                        {
                            "id": 154,
                            "menu_id": 39,
                            "name": "Add",
                            "action": "last-triggered.add",
                            "value": true
                        },
                        {
                            "id": 155,
                            "menu_id": 39,
                            "name": "Edit",
                            "action": "last-triggered.edit",
                            "value": true
                        },
                        {
                            "id": 156,
                            "menu_id": 39,
                            "name": "Delete",
                            "action": "last-triggered.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 40,
                    "icon": "home",
                    "url": "/scoring/lifetime-lot",
                    "type": "item",
                    "parent_id": 37,
                    "tab": [],
                    "active": 1,
                    "title": "Lifetime Lot",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 157,
                            "menu_id": 40,
                            "name": "View",
                            "action": "lifetime-lot.view",
                            "value": true
                        },
                        {
                            "id": 158,
                            "menu_id": 40,
                            "name": "Add",
                            "action": "lifetime-lot.add",
                            "value": true
                        },
                        {
                            "id": 159,
                            "menu_id": 40,
                            "name": "Edit",
                            "action": "lifetime-lot.edit",
                            "value": true
                        },
                        {
                            "id": 160,
                            "menu_id": 40,
                            "name": "Delete",
                            "action": "lifetime-lot.delete",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "id": 41,
            "icon": "admin_panel_settings",
            "url": null,
            "type": "collapse",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "User Management",
            "mode": "parent",
            "permissions": [
                {
                    "id": 161,
                    "menu_id": 41,
                    "name": "View",
                    "action": "users.view",
                    "value": true
                },
                {
                    "id": 162,
                    "menu_id": 41,
                    "name": "Add",
                    "action": "users.add",
                    "value": true
                },
                {
                    "id": 163,
                    "menu_id": 41,
                    "name": "Edit",
                    "action": "users.edit",
                    "value": true
                },
                {
                    "id": 164,
                    "menu_id": 41,
                    "name": "Delete",
                    "action": "users.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 42,
                    "icon": "home",
                    "url": "/user-management/user",
                    "type": "item",
                    "parent_id": 41,
                    "tab": [],
                    "active": 1,
                    "title": "User",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 165,
                            "menu_id": 42,
                            "name": "View",
                            "action": "user.view",
                            "value": true
                        },
                        {
                            "id": 166,
                            "menu_id": 42,
                            "name": "Add",
                            "action": "user.add",
                            "value": true
                        },
                        {
                            "id": 167,
                            "menu_id": 42,
                            "name": "Edit",
                            "action": "user.edit",
                            "value": true
                        },
                        {
                            "id": 168,
                            "menu_id": 42,
                            "name": "Delete",
                            "action": "user.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 43,
                    "icon": "home",
                    "url": "/user-management/role",
                    "type": "item",
                    "parent_id": 41,
                    "tab": [],
                    "active": 1,
                    "title": "User Group",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 169,
                            "menu_id": 43,
                            "name": "View",
                            "action": "user-group.view",
                            "value": true
                        },
                        {
                            "id": 170,
                            "menu_id": 43,
                            "name": "Add",
                            "action": "user-group.add",
                            "value": true
                        },
                        {
                            "id": 171,
                            "menu_id": 43,
                            "name": "Edit",
                            "action": "user-group.edit",
                            "value": true
                        },
                        {
                            "id": 172,
                            "menu_id": 43,
                            "name": "Delete",
                            "action": "user-group.delete",
                            "value": true
                        }
                    ]
                }
            ]
        },
        {
            "id": 44,
            "icon": "handyman",
            "url": null,
            "type": "collapse",
            "parent_id": 0,
            "tab": [],
            "active": 1,
            "title": "Setting",
            "mode": "parent",
            "permissions": [
                {
                    "id": 173,
                    "menu_id": 44,
                    "name": "View",
                    "action": "setting.view",
                    "value": true
                },
                {
                    "id": 174,
                    "menu_id": 44,
                    "name": "Add",
                    "action": "setting.add",
                    "value": true
                },
                {
                    "id": 175,
                    "menu_id": 44,
                    "name": "Edit",
                    "action": "setting.edit",
                    "value": true
                },
                {
                    "id": 176,
                    "menu_id": 44,
                    "name": "Delete",
                    "action": "setting.delete",
                    "value": true
                }
            ],
            "sub": [
                {
                    "id": 45,
                    "icon": "home",
                    "url": "/settings/group-symbol",
                    "type": "item",
                    "parent_id": 44,
                    "tab": [],
                    "active": 1,
                    "title": "Group Symbol",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 177,
                            "menu_id": 45,
                            "name": "View",
                            "action": "group-symbol.view",
                            "value": true
                        },
                        {
                            "id": 178,
                            "menu_id": 45,
                            "name": "Add",
                            "action": "group-symbol.add",
                            "value": true
                        },
                        {
                            "id": 179,
                            "menu_id": 45,
                            "name": "Edit",
                            "action": "group-symbol.edit",
                            "value": true
                        },
                        {
                            "id": 180,
                            "menu_id": 45,
                            "name": "Delete",
                            "action": "group-symbol.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 46,
                    "icon": "home",
                    "url": "/settings/warehouse",
                    "type": "item",
                    "parent_id": 44,
                    "tab": [],
                    "active": 1,
                    "title": "Warehouse",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 181,
                            "menu_id": 46,
                            "name": "View",
                            "action": "warehouse.view",
                            "value": true
                        },
                        {
                            "id": 182,
                            "menu_id": 46,
                            "name": "Add",
                            "action": "warehouse.add",
                            "value": true
                        },
                        {
                            "id": 183,
                            "menu_id": 46,
                            "name": "Edit",
                            "action": "warehouse.edit",
                            "value": true
                        },
                        {
                            "id": 184,
                            "menu_id": 46,
                            "name": "Delete",
                            "action": "warehouse.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 47,
                    "icon": "home",
                    "url": "/settings/profit-loss-revision",
                    "type": "item",
                    "parent_id": 44,
                    "tab": [],
                    "active": 1,
                    "title": "Profit Loss Revision",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 185,
                            "menu_id": 47,
                            "name": "View",
                            "action": "profit-loss-revision.view",
                            "value": true
                        },
                        {
                            "id": 186,
                            "menu_id": 47,
                            "name": "Add",
                            "action": "profit-loss-revision.add",
                            "value": true
                        },
                        {
                            "id": 187,
                            "menu_id": 47,
                            "name": "Edit",
                            "action": "profit-loss-revision.edit",
                            "value": true
                        },
                        {
                            "id": 188,
                            "menu_id": 47,
                            "name": "Delete",
                            "action": "profit-loss-revision.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 48,
                    "icon": "home",
                    "url": "/settings/cross-scalper-symbol",
                    "type": "item",
                    "parent_id": 44,
                    "tab": [],
                    "active": 1,
                    "title": "Cross Scalper Symbol",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 189,
                            "menu_id": 48,
                            "name": "View",
                            "action": "cross-scalper.view",
                            "value": true
                        },
                        {
                            "id": 190,
                            "menu_id": 48,
                            "name": "Add",
                            "action": "cross-scalper.add",
                            "value": true
                        },
                        {
                            "id": 191,
                            "menu_id": 48,
                            "name": "Edit",
                            "action": "cross-scalper.edit",
                            "value": true
                        },
                        {
                            "id": 192,
                            "menu_id": 48,
                            "name": "Delete",
                            "action": "cross-scalper.delete",
                            "value": true
                        }
                    ]
                },
                {
                    "id": 49,
                    "icon": "home",
                    "url": "/settings/filter-group",
                    "type": "item",
                    "parent_id": 44,
                    "tab": [],
                    "active": 1,
                    "title": "Filter Group",
                    "mode": "sub",
                    "permissions": [
                        {
                            "id": 193,
                            "menu_id": 49,
                            "name": "View",
                            "action": "filter-group.view",
                            "value": true
                        },
                        {
                            "id": 194,
                            "menu_id": 49,
                            "name": "Add",
                            "action": "filter-group.add",
                            "value": true
                        },
                        {
                            "id": 195,
                            "menu_id": 49,
                            "name": "Edit",
                            "action": "filter-group.edit",
                            "value": true
                        },
                        {
                            "id": 196,
                            "menu_id": 49,
                            "name": "Delete",
                            "action": "filter-group.delete",
                            "value": true
                        }
                    ]
                }
            ]
        }
    ]
}

module.exports = data;