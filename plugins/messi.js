let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'messi.m4a', '', 'xd', m)
}
handler.help = ['messi']
handler.tags = ['premium']
handler.command = /^(messi)$/i
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
