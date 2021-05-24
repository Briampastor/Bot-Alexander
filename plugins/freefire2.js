let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'freefire2.m4a', '', 'xd', m)
}
handler.help = ['freefire2']
handler.tags = ['premium']
handler.command = /^(freefire2)$/i
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
