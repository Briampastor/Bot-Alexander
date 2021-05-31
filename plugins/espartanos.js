let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'espartanos.m4a', '', 'xd', m)
}
handler.help = ['espartanos']
handler.tags = ['premium']
handler.command = /^(espartanos)$/i
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
handler.exp = 100
module.exports = handler
