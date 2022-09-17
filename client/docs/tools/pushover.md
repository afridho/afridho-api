---
sidebar_position: 1
---

# Pushover
Use this if you want to send notification to your device instantly.

## Environment

| ENV      | Description |
| ----------- | ----------- |
| **PUSHOVER_TOKEN**      | token of Pushover       |
| **PUSHOVER_KEY**   | user key to access device in pushover        |

## `GET` Endpoint

```
/api/pushover?{query_param}
```

## How to using
:::tip Query Params
Send all this as query param. ***Must be encoded text***
:::

- `title` :  title of message
- `message` : content message
- `url` : url to embed
- `url_title` : title off url embed
- `priority` : priority of message `-2`, `-1`, `0` (default), `1`, or `2`
- `device` : choose device. remove this if send all devices
- `status` : will add icon
  - `success` or `ok` will transform ✅
  - `failure` or `no` will transform ❌
  - **message required** if you want to show status icon

Complete documentation [Pushover Documantation.](https://pushover.net/api)

---

### Result
```
/api/pushover?title=Test&message=message%20sent%20succes&status=success
```
#### <a href='/api/pushover?title=Test&message=message%20sent%20succes&status=success' target="_blank">Test </a>🏃🏻‍♂️

```json title="Response Example:"
{
  "code":200,
  "status":"Message sent.",
  "request":"bc5cf622-d330-4471-b934-3294a0e08005"
}
```