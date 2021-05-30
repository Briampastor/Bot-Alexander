let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'logica.m4a', '', 'xd', m)
}
handler.help = ['lógica']
handler.tags = ['premium']
handler.command = /^(lógica)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.registrar = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 100
module.exports = handler
