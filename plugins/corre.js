let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'corre.m4a', '', 'xd', m)
}
handler.help = ['corre']
handler.tags = ['premium']
handler.command = /^(corre)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.registrar = true
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 100
module.exports = handler
