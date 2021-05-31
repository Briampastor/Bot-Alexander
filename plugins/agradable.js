let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'agradable.m4a', '', 'xd', m)
}
handler.help = ['agradable']
handler.tags = ['premium']
handler.command = /^(agradable)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.registrar = true
handler.exp = 100
module.exports = handler
