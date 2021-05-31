let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'freefire1.m4a', '', 'xd', m)
}
handler.help = ['freefire1']
handler.tags = ['premium']
handler.command = /^(freefire1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.registrar = true
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 100
module.exports = handler
