---
sidebar_position: 2
title: URL Shorten
---

This tool will short your long url, so you can easily share short url to others. Short url will redirect to original url rapidly. 

## Environment

| ENV      | Description |
| ----------- | ----------- |
| **BASE_DOMAIN**      | current: bzeg.link       |

## `POST` Endpoint

```bash
${BASE_DOMAIN}/v1/generate
```

## How to using
:::tip Query Params
Send all this as body (raw or json)
:::

- `origUrl` :  original url

```json title="Method POST"
{
  "origUrl" : "https://google.com/xxxx"
}

```

---

### Result

#### <a href='https://www.bzeg.link/' target="_blank">URL Shorten Web (bzeg.link) </a>🏃🏻‍♂️

```json title="Response : Success✅"
{
  "info":"Success",
  "shortUrl":"bzeg.link/n29Mq_Q"
}
```

```json title="Response : Error❌"
{
  "info":"Error",
  "shortUrl":"Invalid Url"
}
```