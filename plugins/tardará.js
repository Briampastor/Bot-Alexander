let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'tardará.m4a', '', 'xd', m)
}
handler.help = ['tardará']
handler.tags = ['premium']
handler.command = /^(tardará)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.registrar = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
