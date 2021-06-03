let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
Tu número de dados : ${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12'])}
Números de dados de bot : ${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12'])}

quien es el ganador?
`.trim(), m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = /^dado/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

