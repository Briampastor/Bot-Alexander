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
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 1000
module.exports = handler
