let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'tardarĂ¡.m4a', '', 'xd', m)
}
handler.help = ['tardarĂ¡']
handler.tags = ['premium']
handler.command = /^(tardarĂ¡)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.registrar = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
