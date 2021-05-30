let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'grita.m4a', '', 'xd', m)
}
handler.help = ['grita']
handler.tags = ['premium']
handler.command = /^(grita)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 100
module.exports = handler
