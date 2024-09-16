#!/usr/bin/env node

const args = process.argv.slice(2)
const cookie = process.env.COOKIE
const discordWebhook = process.env.DISCORD_WEBHOOK
const discordUser = process.env.DISCORD_USER
const msgDelimiter = ':'
const messages = []
const endpoints = {
  zzz: 'https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign?act_id=e202406031448091',
  gi:  'https://sg-hk4e-api.hoyolab.com/event/sol/sign?act_id=e202102251931481',
  hsr: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?act_id=e202303301540311',
  hi3: 'https://sg-public-api.hoyolab.com/event/mani/sign?act_id=e202110291205111',
  tot: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?act_id=e202202281857121',
}

let hasErrors = false

async function main() {
  if (!args.length) {
    log('error', 'Argument is empty!')
    log('info', 'Usage:   node index.js [zzz] [gi] [hsr] [hi3] [tot]')
    log('info', 'Example: node index.js hsr')
    log('info', '         node index.js zzz gi hsr')
    throw new Error('No argument passed.')
  }

  if (!cookie) {
    throw new Error('COOKIE environment variable not set!')
  }

  // begin processing command arguments
  for (const arg of args) {
    const game = arg.toLowerCase()

    log('debug', `\n----- CHECKING IN FOR ${game} -----`)

    if (!(game in endpoints)) {
      log('error', `Game ${arg} is invalid. Available games are: zzz, gi, hsr, hi3, and tot`)
      continue
    }

    // begin check in
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
    const code = String(json.retcode)
    const successCodes = {
      '0': 'Successfully checked in!',
      '-5003': 'Already checked in for today',
    }

    // success responses
    if (code in successCodes) {
      log('info', game, `${successCodes[code]}`)
      continue
    }

    // error responses
    const errorCodes = {
      '-100': 'Error not logged in. Your cookie is invalid, try setting up again',
      '-10002': 'Error not found. You haven\'t played this game'
    }

    log('debug', game, `Headers`, Object.fromEntries(res.headers))
    log('debug', game, `Response`, json)

    if (code in errorCodes) {
      log('error', game, `${errorCodes[code]}`)
      continue
    }

    log('error', game, `Error undocumented, report to Issues page if this persists`)
  }

  // send to discord webhook if set and valid url
  if (discordWebhook && URL.canParse(discordWebhook)) {
    await discordWebhookSend()
  }

  if (hasErrors) {
    console.log('')
    throw new Error('Error(s) occured.')
  }
}

// custom log function to store messages
function log(type, ...data) {

  // log to real console
  console[type](...data)

  // ignore debug and toggle hasErrors
  switch (type) {
    case 'debug': return
    case 'error': hasErrors = true
  }

  // check if it's a game specific message, and set it as uppercase for clarity, and add delimiter
  if(data[0] in endpoints) {
    data[0] = data[0].toUpperCase() + msgDelimiter
  }

  // serialize data and add to messages
  const string = data
    .map(value => {
      if (typeof value === 'object') {
        return JSON.stringify(value, null, 2).replace(/^"|"$/, '')
      }

      return value
    })
    .join(' ')

  messages.push({ type, string })
}

// must be function to return early
async function discordWebhookSend() {
  log('debug', '\n----- DISCORD WEBHOOK -----')

  if (!discordWebhook.toLowerCase().trim().startsWith('https://discord.com/api/webhooks/')) {
    log('error', 'DISCORD_WEBHOOK is not a Discord webhook URL. Must start with `https://discord.com/api/webhooks/`')
    return
  }
  let discordMsg = ""
  if (discordUser) {
      discordMsg = `<@${discordUser}>\n` 
  }
  discordMsg += messages.map(msg => `(${msg.type.toUpperCase()}) ${msg.string}`).join('\n')

  const res = await fetch(discordWebhook, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      content: discordMsg
    })
  })

  if (res.status === 204) {
    log('info', 'Successfully sent message to Discord webhook!')
    return
  }

  log('error', 'Error sending message to Discord webhook, please check URL and permissions')
}

await main()
