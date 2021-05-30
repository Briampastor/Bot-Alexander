let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'grillos.m4a', '', 'xd', m)
}
handler.help = ['grillos']
handler.tags = ['premium']
handler.command = /^(grillos)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = false
handler.registrar = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
