---
sidebar_position: 2
title : Football Update (Automation)
---

Get recently match result of your favorite club automatically with cron and send to your device with Pushover Notification.

## `GET` Endpoint

```
/api/fav-football-cron/{param}?alias={alias}&debug={debug}
```

## How to using
- Same with this param api [Football Update](./football-update.md#how-to-using)
- `debug` : `true or false` debug to force send notification
- [Google Cloud Scheduler](https://console.cloud.google.com/cloudscheduler) set cron to access this http/api [Test 🏃🏻‍♂️](#result)
  - Cron default `50 5,23 * * *`
    - At minute 50 past hour 5 and 23.
 
:::tip  
Pushover will send notification if data has update or new club favorite added.
:::

## Requirements

### Environment
| ENV              | Description |
| ---------------- | ----------- |
| **MONGODB_PASS** | mongodb cluster user |
| **MONGODB_PASS** | mongodb cluster pass |
| **PUSHOVER_KEY** | user key to access device in pushover   |
| **PUSHOVER_TOKEN_FOOTBALL_UPDATE** | token of Pushover specific app |

### MongoDB Database
| Name           | Description |
| ---------------- | ----------- |
| **Cluster** | `Cluster0` |
| **Database** | `afridho-api` |
| **Collection** | `football_update_cron`   |
| **Document Schema** | `club_name, status, date` |

### Automation
**[Google Cloud Scheduler](https://console.cloud.google.com/cloudscheduler)**

---
## Result
```
/api/fav-football-cron/arsenal
```
#### <a href='/api/fav-football-cron/arsenal' target="_blank">Test </a>🏃🏻‍♂️

```json title="Response : Successful send pushover notification."
{
  "code" : 200,
  "status" : "Pushover sent."
}
```

```json title="Response : No Pushover sent"
{
  "code" : 200,
  "status" : "no update data."
}
```

```json title="Response : Debug mode"
{
  "debug" : true,
  "code" : 200,
  "status" : "Pushover sent."
}
```