var data = {
    "id": 1,
    "name": "Admin",
    "description": "Administrator",
    "active": 1,
    "created_at": "2019-11-20 10:53:09",
    "updated_at": "2019-11-20 10:53:09",
    "permissions": [
        {
            "id": 1,
            "name": "Home",
            "icon": "home",
            "url": "/dashboards",
            "type": "item",
            "is_parent": 1,
            "parent_id": 0,
            "sequence": 1,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 1,
                    "menu_id": 1,
                    "name": "View",
                    "action": "home.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 1
                },
                {
                    "id": 2,
                    "menu_id": 1,
                    "name": "Add",
                    "action": "home.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 2
                },
                {
                    "id": 3,
                    "menu_id": 1,
                    "name": "Edit",
                    "action": "home.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 3
                },
                {
                    "id": 4,
                    "menu_id": 1,
                    "name": "Delete",
                    "action": "home.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 4
                }
            ]
        },
        {
            "id": 2,
            "name": "Ceo Dashboard",
            "icon": "home",
            "url": "/ceo",
            "type": "group",
            "is_parent": 1,
            "parent_id": 0,
            "sequence": 2,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 5,
                    "menu_id": 2,
                    "name": "View",
                    "action": "ceo.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 5
                },
                {
                    "id": 6,
                    "menu_id": 2,
                    "name": "Add",
                    "action": "ceo.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 6
                },
                {
                    "id": 7,
                    "menu_id": 2,
                    "name": "Edit",
                    "action": "ceo.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 7
                },
                {
                    "id": 8,
                    "menu_id": 2,
                    "name": "Delete",
                    "action": "ceo.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 8
                }
            ]
        },
        {
            "id": 3,
            "name": "Dashboard",
            "icon": "home",
            "url": "/ceo/dashboard",
            "type": "item",
            "is_parent": 0,
            "parent_id": 2,
            "sequence": 3,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 9,
                    "menu_id": 3,
                    "name": "View",
                    "action": "ceo-dashboard.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 9
                },
                {
                    "id": 10,
                    "menu_id": 3,
                    "name": "Add",
                    "action": "ceo-dashboard.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 10
                },
                {
                    "id": 11,
                    "menu_id": 3,
                    "name": "Edit",
                    "action": "ceo-dashboard.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 11
                },
                {
                    "id": 12,
                    "menu_id": 3,
                    "name": "Delete",
                    "action": "ceo-dashboard.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 12
                }
            ]
        },
        {
            "id": 4,
            "name": "Conversion",
            "icon": "home",
            "url": "/ceo/conversion",
            "type": "item",
            "is_parent": 0,
            "parent_id": 2,
            "sequence": 4,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 13,
                    "menu_id": 4,
                    "name": "View",
                    "action": "convertion.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 13
                },
                {
                    "id": 14,
                    "menu_id": 4,
                    "name": "Add",
                    "action": "convertion.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 14
                },
                {
                    "id": 15,
                    "menu_id": 4,
                    "name": "Edit",
                    "action": "convertion.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 15
                },
                {
                    "id": 16,
                    "menu_id": 4,
                    "name": "Delete",
                    "action": "convertion.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 16
                }
            ]
        },
        {
            "id": 5,
            "name": "Report",
            "icon": "assignment",
            "url": "/report",
            "type": "group",
            "is_parent": 1,
            "parent_id": 0,
            "sequence": 5,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 17,
                    "menu_id": 5,
                    "name": "View",
                    "action": "report.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 17
                },
                {
                    "id": 18,
                    "menu_id": 5,
                    "name": "Add",
                    "action": "report.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 18
                },
                {
                    "id": 19,
                    "menu_id": 5,
                    "name": "Edit",
                    "action": "report.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 19
                },
                {
                    "id": 20,
                    "menu_id": 5,
                    "name": "Delete",
                    "action": "report.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 20
                }
            ]
        },
        {
            "id": 6,
            "name": "Analyze Spread",
            "icon": "home",
            "url": "/report/analyze-spread",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 6,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 21,
                    "menu_id": 6,
                    "name": "View",
                    "action": "analyze-spread.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 21
                },
                {
                    "id": 22,
                    "menu_id": 6,
                    "name": "Add",
                    "action": "analyze-spread.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 22
                },
                {
                    "id": 23,
                    "menu_id": 6,
                    "name": "Edit",
                    "action": "analyze-spread.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 23
                },
                {
                    "id": 24,
                    "menu_id": 6,
                    "name": "Delete",
                    "action": "analyze-spread.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 24
                }
            ]
        },
        {
            "id": 7,
            "name": "MA Info",
            "icon": "home",
            "url": "/report/ma-info",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 7,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 25,
                    "menu_id": 7,
                    "name": "View",
                    "action": "ma-Info.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 25
                },
                {
                    "id": 26,
                    "menu_id": 7,
                    "name": "Add",
                    "action": "ma-Info.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 26
                },
                {
                    "id": 27,
                    "menu_id": 7,
                    "name": "Edit",
                    "action": "ma-Info.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 27
                },
                {
                    "id": 28,
                    "menu_id": 7,
                    "name": "Delete",
                    "action": "ma-Info.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 28
                }
            ]
        },
        {
            "id": 8,
            "name": "Daily History",
            "icon": "home",
            "url": "/report/daily-history",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 8,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 29,
                    "menu_id": 8,
                    "name": "View",
                    "action": "daily-history.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 29
                },
                {
                    "id": 30,
                    "menu_id": 8,
                    "name": "Add",
                    "action": "daily-history.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 30
                },
                {
                    "id": 31,
                    "menu_id": 8,
                    "name": "Edit",
                    "action": "daily-history.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 31
                },
                {
                    "id": 32,
                    "menu_id": 8,
                    "name": "Delete",
                    "action": "daily-history.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 32
                }
            ]
        },
        {
            "id": 9,
            "name": "Daily Report",
            "icon": "home",
            "url": "/report/daily-report",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 9,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 33,
                    "menu_id": 9,
                    "name": "View",
                    "action": "daily-report.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 33
                },
                {
                    "id": 34,
                    "menu_id": 9,
                    "name": "Add",
                    "action": "daily-report.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 34
                },
                {
                    "id": 35,
                    "menu_id": 9,
                    "name": "Edit",
                    "action": "daily-report.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 35
                },
                {
                    "id": 36,
                    "menu_id": 9,
                    "name": "Delete",
                    "action": "daily-report.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 36
                }
            ]
        },
        {
            "id": 10,
            "name": "Big Lot",
            "icon": "home",
            "url": "/report/big-lot",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 10,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 37,
                    "menu_id": 10,
                    "name": "View",
                    "action": "big-lot.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 37
                },
                {
                    "id": 38,
                    "menu_id": 10,
                    "name": "Add",
                    "action": "big-lot.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 38
                },
                {
                    "id": 39,
                    "menu_id": 10,
                    "name": "Edit",
                    "action": "big-lot.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 39
                },
                {
                    "id": 40,
                    "menu_id": 10,
                    "name": "Delete",
                    "action": "big-lot.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 40
                }
            ]
        },
        {
            "id": 11,
            "name": "Tick Account",
            "icon": "home",
            "url": "/report/tick-account",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 11,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 41,
                    "menu_id": 11,
                    "name": "View",
                    "action": "tick-account.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 41
                },
                {
                    "id": 42,
                    "menu_id": 11,
                    "name": "Add",
                    "action": "tick-account.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 42
                },
                {
                    "id": 43,
                    "menu_id": 11,
                    "name": "Edit",
                    "action": "tick-account.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 43
                },
                {
                    "id": 44,
                    "menu_id": 11,
                    "name": "Delete",
                    "action": "tick-account.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 44
                }
            ]
        },
        {
            "id": 12,
            "name": "Slippage",
            "icon": "home",
            "url": "/report/slippage",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 12,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 45,
                    "menu_id": 12,
                    "name": "View",
                    "action": "slippage.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 45
                },
                {
                    "id": 46,
                    "menu_id": 12,
                    "name": "Add",
                    "action": "slippage.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 46
                },
                {
                    "id": 47,
                    "menu_id": 12,
                    "name": "Edit",
                    "action": "slippage.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 47
                },
                {
                    "id": 48,
                    "menu_id": 12,
                    "name": "Delete",
                    "action": "slippage.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 48
                }
            ]
        },
        {
            "id": 13,
            "name": "Free Margin",
            "icon": "home",
            "url": "/report/free-margin",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 13,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 49,
                    "menu_id": 13,
                    "name": "View",
                    "action": "free-margin.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 49
                },
                {
                    "id": 50,
                    "menu_id": 13,
                    "name": "Add",
                    "action": "free-margin.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 50
                },
                {
                    "id": 51,
                    "menu_id": 13,
                    "name": "Edit",
                    "action": "free-margin.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 51
                },
                {
                    "id": 52,
                    "menu_id": 13,
                    "name": "Delete",
                    "action": "free-margin.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 52
                }
            ]
        },
        {
            "id": 14,
            "name": "Stopout",
            "icon": "home",
            "url": "/report/stopout",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 14,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 53,
                    "menu_id": 14,
                    "name": "View",
                    "action": "stopout.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 53
                },
                {
                    "id": 54,
                    "menu_id": 14,
                    "name": "Add",
                    "action": "stopout.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 54
                },
                {
                    "id": 55,
                    "menu_id": 14,
                    "name": "Edit",
                    "action": "stopout.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 55
                },
                {
                    "id": 56,
                    "menu_id": 14,
                    "name": "Delete",
                    "action": "stopout.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 56
                }
            ]
        },
        {
            "id": 15,
            "name": "Open Position",
            "icon": "home",
            "url": "/report/open-position",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 15,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 57,
                    "menu_id": 15,
                    "name": "View",
                    "action": "open-position.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 57
                },
                {
                    "id": 58,
                    "menu_id": 15,
                    "name": "Add",
                    "action": "open-position.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 58
                },
                {
                    "id": 59,
                    "menu_id": 15,
                    "name": "Edit",
                    "action": "open-position.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 59
                },
                {
                    "id": 60,
                    "menu_id": 15,
                    "name": "Delete",
                    "action": "open-position.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 60
                }
            ]
        },
        {
            "id": 16,
            "name": "Net Volume",
            "icon": "home",
            "url": "/report/net-volume",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 16,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 61,
                    "menu_id": 16,
                    "name": "View",
                    "action": "net-volume.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 61
                },
                {
                    "id": 62,
                    "menu_id": 16,
                    "name": "Add",
                    "action": "net-volume.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 62
                },
                {
                    "id": 63,
                    "menu_id": 16,
                    "name": "Edit",
                    "action": "net-volume.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 63
                },
                {
                    "id": 64,
                    "menu_id": 16,
                    "name": "Delete",
                    "action": "net-volume.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 64
                }
            ]
        },
        {
            "id": 17,
            "name": "Profile A",
            "icon": "home",
            "url": "/report/profilea",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 17,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 65,
                    "menu_id": 17,
                    "name": "View",
                    "action": "report-profileA.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 65
                },
                {
                    "id": 66,
                    "menu_id": 17,
                    "name": "Add",
                    "action": "report-profileA.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 66
                },
                {
                    "id": 67,
                    "menu_id": 17,
                    "name": "Edit",
                    "action": "report-profileA.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 67
                },
                {
                    "id": 68,
                    "menu_id": 17,
                    "name": "Delete",
                    "action": "report-profileA.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 68
                }
            ]
        },
        {
            "id": 18,
            "name": "Reopen Trades",
            "icon": "home",
            "url": "/report/reopen-trades",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 18,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 69,
                    "menu_id": 18,
                    "name": "View",
                    "action": "reopen-trades.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 69
                },
                {
                    "id": 70,
                    "menu_id": 18,
                    "name": "Add",
                    "action": "reopen-trades.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 70
                },
                {
                    "id": 71,
                    "menu_id": 18,
                    "name": "Edit",
                    "action": "reopen-trades.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 71
                },
                {
                    "id": 72,
                    "menu_id": 18,
                    "name": "Delete",
                    "action": "reopen-trades.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 72
                }
            ]
        },
        {
            "id": 19,
            "name": "Deleted Trades",
            "icon": "home",
            "url": "/report/deleted-trades",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 19,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 73,
                    "menu_id": 19,
                    "name": "View",
                    "action": "deleted-trades.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 73
                },
                {
                    "id": 74,
                    "menu_id": 19,
                    "name": "Add",
                    "action": "deleted-trades.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 74
                },
                {
                    "id": 75,
                    "menu_id": 19,
                    "name": "Edit",
                    "action": "deleted-trades.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 75
                },
                {
                    "id": 76,
                    "menu_id": 19,
                    "name": "Delete",
                    "action": "deleted-trades.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 76
                }
            ]
        },
        {
            "id": 20,
            "name": "MTM Journal",
            "icon": "home",
            "url": "/report/mtm-journal",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 20,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 77,
                    "menu_id": 20,
                    "name": "View",
                    "action": "mtm-journal.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 77
                },
                {
                    "id": 78,
                    "menu_id": 20,
                    "name": "Add",
                    "action": "mtm-journal.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 78
                },
                {
                    "id": 79,
                    "menu_id": 20,
                    "name": "Edit",
                    "action": "mtm-journal.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 79
                },
                {
                    "id": 80,
                    "menu_id": 20,
                    "name": "Delete",
                    "action": "mtm-journal.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 80
                }
            ]
        },
        {
            "id": 21,
            "name": "Modified Pending Ticket",
            "icon": "home",
            "url": "/report/modified-pending-ticket",
            "type": "item",
            "is_parent": 0,
            "parent_id": 5,
            "sequence": 21,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 81,
                    "menu_id": 21,
                    "name": "View",
                    "action": "modified-pending-ticket.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 81
                },
                {
                    "id": 82,
                    "menu_id": 21,
                    "name": "Add",
                    "action": "modified-pending-ticket.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 82
                },
                {
                    "id": 83,
                    "menu_id": 21,
                    "name": "Edit",
                    "action": "modified-pending-ticket.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 83
                },
                {
                    "id": 84,
                    "menu_id": 21,
                    "name": "Delete",
                    "action": "modified-pending-ticket.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 84
                }
            ]
        },
        {
            "id": 22,
            "name": "ProfileA",
            "icon": "stars",
            "url": "/profilea",
            "type": "group",
            "is_parent": 1,
            "parent_id": 0,
            "sequence": 22,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 85,
                    "menu_id": 22,
                    "name": "View",
                    "action": "profileA.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 85
                },
                {
                    "id": 86,
                    "menu_id": 22,
                    "name": "Add",
                    "action": "profileA.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 86
                },
                {
                    "id": 87,
                    "menu_id": 22,
                    "name": "Edit",
                    "action": "profileA.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 87
                },
                {
                    "id": 88,
                    "menu_id": 22,
                    "name": "Delete",
                    "action": "profileA.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 88
                }
            ]
        },
        {
            "id": 23,
            "name": "Accounts",
            "icon": "home",
            "url": "/profilea/accounts",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 23,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 89,
                    "menu_id": 23,
                    "name": "View",
                    "action": "profileA-account.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 89
                },
                {
                    "id": 90,
                    "menu_id": 23,
                    "name": "Add",
                    "action": "profileA-account.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 90
                },
                {
                    "id": 91,
                    "menu_id": 23,
                    "name": "Edit",
                    "action": "profileA-account.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 91
                },
                {
                    "id": 92,
                    "menu_id": 23,
                    "name": "Delete",
                    "action": "profileA-account.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 92
                }
            ]
        },
        {
            "id": 24,
            "name": "Accounts Disabled",
            "icon": "home",
            "url": "/profilea/accounts-disabled",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 24,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 93,
                    "menu_id": 24,
                    "name": "View",
                    "action": "profileA-account-disabled.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 93
                },
                {
                    "id": 94,
                    "menu_id": 24,
                    "name": "Add",
                    "action": "profileA-account-disabled.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 94
                },
                {
                    "id": 95,
                    "menu_id": 24,
                    "name": "Edit",
                    "action": "profileA-account-disabled.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 95
                },
                {
                    "id": 96,
                    "menu_id": 24,
                    "name": "Delete",
                    "action": "profileA-account-disabled.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 96
                }
            ]
        },
        {
            "id": 25,
            "name": "Group Trades",
            "icon": "home",
            "url": "/profilea/group-trades",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 25,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 97,
                    "menu_id": 25,
                    "name": "View",
                    "action": "group-trades.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 97
                },
                {
                    "id": 98,
                    "menu_id": 25,
                    "name": "Add",
                    "action": "group-trades.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 98
                },
                {
                    "id": 99,
                    "menu_id": 25,
                    "name": "Edit",
                    "action": "group-trades.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 99
                },
                {
                    "id": 100,
                    "menu_id": 25,
                    "name": "Delete",
                    "action": "group-trades.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 100
                }
            ]
        },
        {
            "id": 26,
            "name": "Equity Highest Lowest",
            "icon": "home",
            "url": "/profilea/equity-highest-lowest",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 26,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 101,
                    "menu_id": 26,
                    "name": "View",
                    "action": "equity-highest-lowest.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 101
                },
                {
                    "id": 102,
                    "menu_id": 26,
                    "name": "Add",
                    "action": "equity-highest-lowest.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 102
                },
                {
                    "id": 103,
                    "menu_id": 26,
                    "name": "Edit",
                    "action": "equity-highest-lowest.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 103
                },
                {
                    "id": 104,
                    "menu_id": 26,
                    "name": "Delete",
                    "action": "equity-highest-lowest.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 104
                }
            ]
        },
        {
            "id": 27,
            "name": "Equity Record",
            "icon": "home",
            "url": "/profilea/equity-record",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 27,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 105,
                    "menu_id": 27,
                    "name": "View",
                    "action": "equity-record.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 105
                },
                {
                    "id": 106,
                    "menu_id": 27,
                    "name": "Add",
                    "action": "equity-record.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 106
                },
                {
                    "id": 107,
                    "menu_id": 27,
                    "name": "Edit",
                    "action": "equity-record.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 107
                },
                {
                    "id": 108,
                    "menu_id": 27,
                    "name": "Delete",
                    "action": "equity-record.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 108
                }
            ]
        },
        {
            "id": 28,
            "name": "Equity Trigger History",
            "icon": "home",
            "url": "/profilea/equity-trigger-history",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 28,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 109,
                    "menu_id": 28,
                    "name": "View",
                    "action": "equity-trigger-history.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 109
                },
                {
                    "id": 110,
                    "menu_id": 28,
                    "name": "Add",
                    "action": "equity-trigger-history.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 110
                },
                {
                    "id": 111,
                    "menu_id": 28,
                    "name": "Edit",
                    "action": "equity-trigger-history.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 111
                },
                {
                    "id": 112,
                    "menu_id": 28,
                    "name": "Delete",
                    "action": "equity-trigger-history.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 112
                }
            ]
        },
        {
            "id": 29,
            "name": "File Source",
            "icon": "home",
            "url": "/profilea/file-source",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 29,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 113,
                    "menu_id": 29,
                    "name": "View",
                    "action": "file-source.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 113
                },
                {
                    "id": 114,
                    "menu_id": 29,
                    "name": "Add",
                    "action": "file-source.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 114
                },
                {
                    "id": 115,
                    "menu_id": 29,
                    "name": "Edit",
                    "action": "file-source.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 115
                },
                {
                    "id": 116,
                    "menu_id": 29,
                    "name": "Delete",
                    "action": "file-source.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 116
                }
            ]
        },
        {
            "id": 30,
            "name": "FTP",
            "icon": "home",
            "url": "/profilea/ftp",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 30,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 117,
                    "menu_id": 30,
                    "name": "View",
                    "action": "ftp.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 117
                },
                {
                    "id": 118,
                    "menu_id": 30,
                    "name": "Add",
                    "action": "ftp.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 118
                },
                {
                    "id": 119,
                    "menu_id": 30,
                    "name": "Edit",
                    "action": "ftp.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 119
                },
                {
                    "id": 120,
                    "menu_id": 30,
                    "name": "Delete",
                    "action": "ftp.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 120
                }
            ]
        },
        {
            "id": 31,
            "name": "Trade Monitoring",
            "icon": "home",
            "url": "/profilea/trade-monitoring",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 31,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 121,
                    "menu_id": 31,
                    "name": "View",
                    "action": "trade-monitoring.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 121
                },
                {
                    "id": 122,
                    "menu_id": 31,
                    "name": "Add",
                    "action": "trade-monitoring.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 122
                },
                {
                    "id": 123,
                    "menu_id": 31,
                    "name": "Edit",
                    "action": "trade-monitoring.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 123
                },
                {
                    "id": 124,
                    "menu_id": 31,
                    "name": "Delete",
                    "action": "trade-monitoring.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 124
                }
            ]
        },
        {
            "id": 32,
            "name": "Manual Trigger",
            "icon": "home",
            "url": "/profilea/manual-trigger",
            "type": "item",
            "is_parent": 0,
            "parent_id": 22,
            "sequence": 32,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 125,
                    "menu_id": 32,
                    "name": "View",
                    "action": "manual-trigger.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 125
                },
                {
                    "id": 126,
                    "menu_id": 32,
                    "name": "Add",
                    "action": "manual-trigger.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 126
                },
                {
                    "id": 127,
                    "menu_id": 32,
                    "name": "Edit",
                    "action": "manual-trigger.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 127
                },
                {
                    "id": 128,
                    "menu_id": 32,
                    "name": "Delete",
                    "action": "manual-trigger.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 128
                }
            ]
        },
        {
            "id": 33,
            "name": "Trailing",
            "icon": "psychology",
            "url": "/trailing",
            "type": "group",
            "is_parent": 0,
            "parent_id": 0,
            "sequence": 33,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 129,
                    "menu_id": 33,
                    "name": "View",
                    "action": "trailing.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 129
                },
                {
                    "id": 130,
                    "menu_id": 33,
                    "name": "Add",
                    "action": "trailing.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 130
                },
                {
                    "id": 131,
                    "menu_id": 33,
                    "name": "Edit",
                    "action": "trailing.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 131
                },
                {
                    "id": 132,
                    "menu_id": 33,
                    "name": "Delete",
                    "action": "trailing.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 132
                }
            ]
        },
        {
            "id": 34,
            "name": "Auto Config",
            "icon": "home",
            "url": "/trailing/auto-config",
            "type": "item",
            "is_parent": 0,
            "parent_id": 33,
            "sequence": 34,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 133,
                    "menu_id": 34,
                    "name": "View",
                    "action": "auto-config.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 133
                },
                {
                    "id": 134,
                    "menu_id": 34,
                    "name": "Add",
                    "action": "auto-config.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 134
                },
                {
                    "id": 135,
                    "menu_id": 34,
                    "name": "Edit",
                    "action": "auto-config.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 135
                },
                {
                    "id": 136,
                    "menu_id": 34,
                    "name": "Delete",
                    "action": "auto-config.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 136
                }
            ]
        },
        {
            "id": 35,
            "name": "Account Position",
            "icon": "home",
            "url": "/trailing/account-position",
            "type": "item",
            "is_parent": 0,
            "parent_id": 33,
            "sequence": 35,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 137,
                    "menu_id": 35,
                    "name": "View",
                    "action": "account-position.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 137
                },
                {
                    "id": 138,
                    "menu_id": 35,
                    "name": "Add",
                    "action": "account-position.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 138
                },
                {
                    "id": 139,
                    "menu_id": 35,
                    "name": "Edit",
                    "action": "account-position.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 139
                },
                {
                    "id": 140,
                    "menu_id": 35,
                    "name": "Delete",
                    "action": "account-position.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 140
                }
            ]
        },
        {
            "id": 36,
            "name": "Manual Sync",
            "icon": "home",
            "url": "/trailing/manual-sync",
            "type": "item",
            "is_parent": 0,
            "parent_id": 33,
            "sequence": 36,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 141,
                    "menu_id": 36,
                    "name": "View",
                    "action": "manual-sync.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 141
                },
                {
                    "id": 142,
                    "menu_id": 36,
                    "name": "Add",
                    "action": "manual-sync.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 142
                },
                {
                    "id": 143,
                    "menu_id": 36,
                    "name": "Edit",
                    "action": "manual-sync.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 143
                },
                {
                    "id": 144,
                    "menu_id": 36,
                    "name": "Delete",
                    "action": "manual-sync.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 144
                }
            ]
        },
        {
            "id": 37,
            "name": "Scoring",
            "icon": "auto_awesome_mosaic",
            "url": "/scoring",
            "type": "group",
            "is_parent": 0,
            "parent_id": 0,
            "sequence": 37,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 145,
                    "menu_id": 37,
                    "name": "View",
                    "action": "scoring.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 145
                },
                {
                    "id": 146,
                    "menu_id": 37,
                    "name": "Add",
                    "action": "scoring.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 146
                },
                {
                    "id": 147,
                    "menu_id": 37,
                    "name": "Edit",
                    "action": "scoring.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 147
                },
                {
                    "id": 148,
                    "menu_id": 37,
                    "name": "Delete",
                    "action": "scoring.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 148
                }
            ]
        },
        {
            "id": 38,
            "name": "Triggered Report",
            "icon": "home",
            "url": "/scoring/triggered-report",
            "type": "item",
            "is_parent": 0,
            "parent_id": 37,
            "sequence": 38,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 149,
                    "menu_id": 38,
                    "name": "View",
                    "action": "triggered-report.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 149
                },
                {
                    "id": 150,
                    "menu_id": 38,
                    "name": "Add",
                    "action": "triggered-report.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 150
                },
                {
                    "id": 151,
                    "menu_id": 38,
                    "name": "Edit",
                    "action": "triggered-report.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 151
                },
                {
                    "id": 152,
                    "menu_id": 38,
                    "name": "Delete",
                    "action": "triggered-report.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 152
                }
            ]
        },
        {
            "id": 39,
            "name": "Last Triggered",
            "icon": "home",
            "url": "/scoring/last-triggered",
            "type": "item",
            "is_parent": 0,
            "parent_id": 37,
            "sequence": 39,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 153,
                    "menu_id": 39,
                    "name": "View",
                    "action": "last-triggered.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 153
                },
                {
                    "id": 154,
                    "menu_id": 39,
                    "name": "Add",
                    "action": "last-triggered.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 154
                },
                {
                    "id": 155,
                    "menu_id": 39,
                    "name": "Edit",
                    "action": "last-triggered.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 155
                },
                {
                    "id": 156,
                    "menu_id": 39,
                    "name": "Delete",
                    "action": "last-triggered.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 156
                }
            ]
        },
        {
            "id": 40,
            "name": "Lifetime Lot",
            "icon": "home",
            "url": "/scoring/lifetime-lot",
            "type": "item",
            "is_parent": 0,
            "parent_id": 37,
            "sequence": 40,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 157,
                    "menu_id": 40,
                    "name": "View",
                    "action": "lifetime-lot.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 157
                },
                {
                    "id": 158,
                    "menu_id": 40,
                    "name": "Add",
                    "action": "lifetime-lot.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 158
                },
                {
                    "id": 159,
                    "menu_id": 40,
                    "name": "Edit",
                    "action": "lifetime-lot.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 159
                },
                {
                    "id": 160,
                    "menu_id": 40,
                    "name": "Delete",
                    "action": "lifetime-lot.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 160
                }
            ]
        },
        {
            "id": 41,
            "name": "User Management",
            "icon": "admin_panel_settings",
            "url": "/user-management",
            "type": "group",
            "is_parent": 1,
            "parent_id": 0,
            "sequence": 41,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 161,
                    "menu_id": 41,
                    "name": "View",
                    "action": "users.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 161
                },
                {
                    "id": 162,
                    "menu_id": 41,
                    "name": "Add",
                    "action": "users.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 162
                },
                {
                    "id": 163,
                    "menu_id": 41,
                    "name": "Edit",
                    "action": "users.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 163
                },
                {
                    "id": 164,
                    "menu_id": 41,
                    "name": "Delete",
                    "action": "users.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 164
                }
            ]
        },
        {
            "id": 42,
            "name": "User",
            "icon": "home",
            "url": "/user-management/user",
            "type": "item",
            "is_parent": 0,
            "parent_id": 41,
            "sequence": 42,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 165,
                    "menu_id": 42,
                    "name": "View",
                    "action": "user.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 165
                },
                {
                    "id": 166,
                    "menu_id": 42,
                    "name": "Add",
                    "action": "user.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 166
                },
                {
                    "id": 167,
                    "menu_id": 42,
                    "name": "Edit",
                    "action": "user.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 167
                },
                {
                    "id": 168,
                    "menu_id": 42,
                    "name": "Delete",
                    "action": "user.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 168
                }
            ]
        },
        {
            "id": 43,
            "name": "User Group",
            "icon": "home",
            "url": "/user-management/role",
            "type": "item",
            "is_parent": 0,
            "parent_id": 41,
            "sequence": 43,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 169,
                    "menu_id": 43,
                    "name": "View",
                    "action": "user-group.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 169
                },
                {
                    "id": 170,
                    "menu_id": 43,
                    "name": "Add",
                    "action": "user-group.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 170
                },
                {
                    "id": 171,
                    "menu_id": 43,
                    "name": "Edit",
                    "action": "user-group.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 171
                },
                {
                    "id": 172,
                    "menu_id": 43,
                    "name": "Delete",
                    "action": "user-group.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 172
                }
            ]
        },
        {
            "id": 44,
            "name": "Setting",
            "icon": "handyman",
            "url": "/settings",
            "type": "group",
            "is_parent": 1,
            "parent_id": 0,
            "sequence": 44,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 173,
                    "menu_id": 44,
                    "name": "View",
                    "action": "setting.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 173
                },
                {
                    "id": 174,
                    "menu_id": 44,
                    "name": "Add",
                    "action": "setting.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 174
                },
                {
                    "id": 175,
                    "menu_id": 44,
                    "name": "Edit",
                    "action": "setting.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 175
                },
                {
                    "id": 176,
                    "menu_id": 44,
                    "name": "Delete",
                    "action": "setting.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 176
                }
            ]
        },
        {
            "id": 45,
            "name": "Group Symbol",
            "icon": "home",
            "url": "/settings/group-symbol",
            "type": "item",
            "is_parent": 0,
            "parent_id": 44,
            "sequence": 45,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 177,
                    "menu_id": 45,
                    "name": "View",
                    "action": "group-symbol.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 177
                },
                {
                    "id": 178,
                    "menu_id": 45,
                    "name": "Add",
                    "action": "group-symbol.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 178
                },
                {
                    "id": 179,
                    "menu_id": 45,
                    "name": "Edit",
                    "action": "group-symbol.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 179
                },
                {
                    "id": 180,
                    "menu_id": 45,
                    "name": "Delete",
                    "action": "group-symbol.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 180
                }
            ]
        },
        {
            "id": 46,
            "name": "Warehouse",
            "icon": "home",
            "url": "/settings/warehouse",
            "type": "item",
            "is_parent": 0,
            "parent_id": 44,
            "sequence": 46,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 181,
                    "menu_id": 46,
                    "name": "View",
                    "action": "warehouse.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 181
                },
                {
                    "id": 182,
                    "menu_id": 46,
                    "name": "Add",
                    "action": "warehouse.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 182
                },
                {
                    "id": 183,
                    "menu_id": 46,
                    "name": "Edit",
                    "action": "warehouse.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 183
                },
                {
                    "id": 184,
                    "menu_id": 46,
                    "name": "Delete",
                    "action": "warehouse.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 184
                }
            ]
        },
        {
            "id": 47,
            "name": "Profit Loss Revision",
            "icon": "home",
            "url": "/settings/profit-loss-revision",
            "type": "item",
            "is_parent": 0,
            "parent_id": 44,
            "sequence": 47,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 185,
                    "menu_id": 47,
                    "name": "View",
                    "action": "profit-loss-revision.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 185
                },
                {
                    "id": 186,
                    "menu_id": 47,
                    "name": "Add",
                    "action": "profit-loss-revision.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 186
                },
                {
                    "id": 187,
                    "menu_id": 47,
                    "name": "Edit",
                    "action": "profit-loss-revision.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 187
                },
                {
                    "id": 188,
                    "menu_id": 47,
                    "name": "Delete",
                    "action": "profit-loss-revision.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 188
                }
            ]
        },
        {
            "id": 48,
            "name": "Cross Scalper Symbol",
            "icon": "home",
            "url": "/settings/cross-scalper-symbol",
            "type": "item",
            "is_parent": 0,
            "parent_id": 44,
            "sequence": 48,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 189,
                    "menu_id": 48,
                    "name": "View",
                    "action": "cross-scalper.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 189
                },
                {
                    "id": 190,
                    "menu_id": 48,
                    "name": "Add",
                    "action": "cross-scalper.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 190
                },
                {
                    "id": 191,
                    "menu_id": 48,
                    "name": "Edit",
                    "action": "cross-scalper.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 191
                },
                {
                    "id": 192,
                    "menu_id": 48,
                    "name": "Delete",
                    "action": "cross-scalper.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 192
                }
            ]
        },
        {
            "id": 49,
            "name": "Filter Group",
            "icon": "home",
            "url": "/settings/filter-group",
            "type": "item",
            "is_parent": 0,
            "parent_id": 44,
            "sequence": 49,
            "actions": null,
            "tab": null,
            "active": 1,
            "permissions": [
                {
                    "id": 193,
                    "menu_id": 49,
                    "name": "View",
                    "action": "filter-group.view",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 193
                },
                {
                    "id": 194,
                    "menu_id": 49,
                    "name": "Add",
                    "action": "filter-group.add",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 194
                },
                {
                    "id": 195,
                    "menu_id": 49,
                    "name": "Edit",
                    "action": "filter-group.edit",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 195
                },
                {
                    "id": 196,
                    "menu_id": 49,
                    "name": "Delete",
                    "action": "filter-group.delete",
                    "value": true,
                    "user_group_id": 1,
                    "permission_id": 196
                }
            ]
        }
    ]
}

module.exports = data;
