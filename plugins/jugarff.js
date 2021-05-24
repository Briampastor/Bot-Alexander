let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'jugarff.m4a', '', 'xd', m)
}
handler.help = ['jugarff']
handler.tags = ['premium']
handler.command = /^(jugarff)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
