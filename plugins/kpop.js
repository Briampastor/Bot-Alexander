let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Para usar el comando ${usedPrefix}kpop\nPor favor escribe: ${usedPrefix}kpop [consulta]\n*Ejemplo*: ${usedPrefix}kpop bts\n\nEsta disponible:\nblackpink, exo, bts`, m)
    if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {

  await m.reply('Buscando...🔎')
        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomkpop = body.split('\n')
                let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                conn.sendFile(m.chat, randomkpopx, '', '*By Arrow_OG*', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Hay un error ... ¿Puedes preguntar?\n*Instagram:* @Arrow11012020!', m)
            })
    } else {
        conn.reply(m.chat, `Lo sentimos, la consulta no está disponible.. Por favor escribe ${usedPrefix}kpop untuk melihat list query`, m)
    }

}

handler.help = ['kpop'].map(v => v + ' consulta')
handler.tags = ['image']
handler.command = /^(kpop)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
