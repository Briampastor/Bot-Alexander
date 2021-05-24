let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'messi.m4a', '', 'xd', m)
}
handler.help = ['messi']
handler.tags = ['premium']
handler.command = /^(messi)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
