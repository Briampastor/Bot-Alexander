let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'gemido.opus', '', 'xd', m)
}
handler.help = ['gime']
handler.tags = ['premium']
handler.command = /^(gime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 10000
module.exports = handler
