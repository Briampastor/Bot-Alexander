let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'Vuela.m4a', '', 'xd', m)
}
handler.help = ['vuela']
handler.tags = ['premium']
handler.command = /^(vuela)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 1000
module.exports = handler
