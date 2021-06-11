let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let RendyGanteng = conn
    await RendyGanteng.fakeReply(m.chat, '*⏳Cargando...⌛*', '0@s.whatsapp.net', '*BY ARROW_OG*')
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let neww = performance.now()
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'es'
    let weton = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves','Viernes','Sábado'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': 'Menu',
      'game': 'Juegos',
      'xp': 'Exp & Limit',
      'sticker': 'Sticker',
      'kerang': 'Kerang Ajaib',
      'quotes': 'Quotes',
      'admin': 'Admin',
      'group': 'Grupo',
      'premium': 'Premium',
      'internet': 'Internet',
      'nulis': 'MagerNulis & Logo',
      'downloader': 'Descargador',
      'tools': 'Herramientas',
      'fun': 'Fun',
      'database': 'Base de datos',
      'jadibot': 'Jadi Bot',
      'owner': 'Owner',
      'host': 'Anfitrión',
      'advanced': 'Avanzado',
      'info': 'Info',
      '': 'Ninguna Categoria',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
        {
      conn.sendFile(m.chat, 'Vos del bot.m4a', '', 'xd', m)
}
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
     
╭─────────────╮
│    ${conn.user.name}   │
╰─────────────╯
│ Hola👋 Que tal ??, %name!
├━⊱ *Límites✨:* %limit Limit
├━⊱ *Nivel🎚️:* %level
├━⊱ *Experiencia🔥:* (%exp / %maxexp)
├━⊱ *XP en Total:* %totalexp
├━⊱ *Fecha:* %date
├━⊱ *Hora⌚:* %time
├━⊱ *⌛Vida⌛:* %uptime
├━⊱ *Base de datos🗃️:* %rtotalreg of %totalreg
├━⊱ *📲Sistema operativo:* ${conn.user.phone.device_manufacturer}
├━⊱ *✅version:* ${conn.browserDescription[2]}
│     *Instagram*
│www.instagram.com/arrow_11012020/
│    🔥𝐌𝐲 𝐜𝐚𝐧𝐚𝐥 𝐝𝐞 𝐲𝐨𝐮𝐭𝐮𝐛𝐞🔥
│m.youtube.com/channel/UCYHmLosvfftHMmLrlGDwIPg
├━⊱ *Suscríbete no seas pavo*
│%readmore
├━⊱ *💢𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 💢*
├━⊱ *❌ Prohibido llamarlo📲*
├━⊱ *❌ Prohibido Escribirle*
├━⊱ *❌Prohibido spam☢*
├━⊱ *❌No agregar a otros grupos*
├━⊱ *✅𝑺𝒖𝒔𝒄𝒓𝒊́𝒃𝒆𝒕𝒆 𝒂 𝒎𝒊 𝒄𝒂𝒏𝒂𝒍*
│%readmore
├━⊱ _creditos_ ✔️ *Arrow_OG*
╰─────────────────
%readmore`
    let header = conn.menu.header || '╭─「 %category 」'
    let body   = conn.menu.body   || '│ • %cmd%islimit'
    let footer = conn.menu.footer || '╰────\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.sendFile(m.chat, 'Bot-Verificado2.png', '', text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Lo siento, el menú está en error', m)
    throw e
  }
}
handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu3|help3|Arrowb|start3\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3
handler.registrar = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
