let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Para que puedas usar el  ${usedPrefix}anime\n*Por favor escribe*: ${usedPrefix}anime [consulta]\n*Ejemplo*: ${usedPrefix}anime random\n\nconsulta que esta disponible:\nrandom, *waifu*, *husbu*, *neko*`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
  await m.reply('*Espera estoy buscando pavo/a...🔎*')

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', '*Arrow_OG*', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Ha ocurrido un error ... Puede preguntar ke\n*Instagram:* @Arrow11012020!', m)
            })
    } else {
        conn.reply(m.chat, `Lo sentimos, la consulta no está disponible.. Por favor escribe ${usedPrefix}anime para ver la lista de consultas`, m)
    }

}

handler.help = ['anime <query>']
handler.tags = ['image']
handler.command = /^(anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.registrar = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
