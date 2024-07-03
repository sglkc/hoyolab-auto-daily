#!/usr/bin/env node

const endpoints = {
  gi:  'https://sg-hk4e-api.hoyolab.com/event/sol/sign?act_id=e202102251931481',
  hsr: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?act_id=e202303301540311',
  hi3: 'https://sg-public-api.hoyolab.com/event/mani/sign?act_id=e202110291205111',
  tot: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?act_id=e202202281857121',
}

async function main() {

  // check script execution
  const args = process.argv.slice(2);

  if (!args.length) {
    console.error('Argument is empty!')
    console.info('Usage:   node index.js [gi] [hsr] [hi3] [tot]')
    console.info('Example: node index.js hsr')
    console.info('         node index.js gi hsr hi3 tot')
    throw new Error('No argument passed.')
  }

  // check cookie environment variable
  const cookie = process.env.COOKIE

  if (!cookie) {
    throw new Error('COOKIE environment variable not set!')
  }

  // track if any of the game has errors
  let hasErrors = false

  // begin processing command arguments
  for (const arg of args) {
    const game = arg.toLowerCase()

    console.debug(`\n----- CHECKING IN FOR ${game} -----`)

    if (!(game in endpoints)) {
      console.error(`Game ${arg} is invalid. Available games are: gi, hsr, hi3, and tot`)
      hasErrors = true
      continue
    }

    // url, parameters, and body from valid browser request
    const endpoint = endpoints[game]
    const url = new URL(endpoint)
    const actId = url.searchParams.get('act_id')

    url.searchParams.set('lang', 'en-us')

    const body = JSON.stringify({
      lang: 'en-us',
      act_id: actId
    })

    // headers from valid browser request
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

    const res = await fetch(url, { method: 'POST', headers, body })
    const json = await res.json()

    // success responses
    if (json.message === 'OK' || json.retcode === 0) {
      console.info(`${game}: Successfully checked in!`)
      continue
    }

    if (json.message.includes('already') || json.retcode === -5003) {
      console.info(`${game}: Already checked in for today`)
      continue
    }

    // error responses
    hasErrors = true

    console.debug(`${game}: Headers`, Object.fromEntries(res.headers))
    console.debug(`${game}: Response`, json)

    if (json.message === 'Not logged in' || json.retcode === -100) {
      console.error(`${game}: Error not logged in`)
      continue
    }

    console.error(`${game}: Error undocumented, check debug headers and response`)
  }

  if (hasErrors) throw new Error('Error(s) occured.')
}

await main()
