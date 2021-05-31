let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'freefire2.m4a', '', 'xd', m)
}
handler.help = ['freefire2']
handler.tags = ['premium']
handler.command = /^(freefire2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.registrar = true
handler.limit = true
handler.exp = 100
module.exports = handler
