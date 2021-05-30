let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'Vuela.m4a', '', 'xd', m)
}
handler.help = ['vuela']
handler.tags = ['premium']
handler.command = /^(vuela)$/i
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
handler.exp = 10
module.exports = handler
