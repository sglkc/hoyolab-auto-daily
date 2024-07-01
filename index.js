#!/usr/bin/env node

async function main() {
  const cookie = process.env.COOKIE

  if (!cookie) {
    throw new Error('COOKIE environment variable not set!')
  }

  const url = new URL('https://sg-public-api.hoyolab.com/event/luna/os/sign')

  url.searchParams.set('act_id', 'e202303301540311')
  url.searchParams.set('lang', 'en-us')

  const headers = new Headers()

  headers.set('accept', 'application/json, text/plain, */*')
  headers.set('accept-encoding', 'gzip, deflate, br, zstd')
  headers.set('accept-language', 'en-US,en;q=0.6')
  headers.set('connection', 'keep-alive')

  headers.set('origin', 'https://act.hoyolab.com')
  headers.set('referrer', 'https://act.hoyolab.com')
  headers.set('content-type', 'application.json;charset=UTF-8')
  headers.set('cookie', cookie)

  headers.set('sec-ch-ua', '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"')
  headers.set('sec-ch-ua-mobile', '?0')
  headers.set('sec-ch-ua-platform', '"Linux"')
  headers.set('sec-fetch-dest', 'empty')
  headers.set('sec-fech-mode', 'cors')
  headers.set('sec-fetch-site', 'same-site')
  headers.set('sec-gpc', '1')

  headers.set('user-agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')

  const res = await fetch(url, { method: 'POST', headers })
  const json = await res.json()

  if (json.message === 'Not logged in' || json.retcode === -100) {
    throw new Error('Not logged in. Check cookie.')
  }

  if (json.message.includes('already') || json.retcode === -5003) {
    console.info('Already checked in for today. If this persists, check cookie.')
    return
  }

  if (json.message === 'OK' || json.retcode === 0) {
    console.info('Successfully checked in!')
    return
  }
}

await main()
