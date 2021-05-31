let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'raa.m4a', '', 'xd', m)
}
handler.help = ['raa']
handler.tags = ['premium']
handler.command = /^(raa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.registrar = true
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
