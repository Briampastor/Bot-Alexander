let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'sad.m4a', '', 'xd', m)
}
handler.help = ['sad']
handler.tags = ['premium']
handler.command = /^(sad)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.registrar = true
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
