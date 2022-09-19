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
- Set cron to access this http/api [Run Api 🏃🏻‍♂️](#result)
 
:::tip  
Pushover will send notification if data has update or new club favorite added.
:::

## Requirements

### Environment
| ENV              | Description |
| ---------------- | ----------- |
| **MONGODB_USER** | mongodb cluster user |
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


## Result
```
/api/fav-football-cron/arsenal
```

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

## Status

[https://pk2dbshx.status.cron-job.org](https://pk2dbshx.status.cron-job.org)

<iframe loading="lazy" src="https://pk2dbshx.status.cron-job.org" name="iFrame Name" scrolling="Yes" height="700" width="100%"></iframe>