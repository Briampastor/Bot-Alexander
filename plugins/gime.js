let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'gemido.opus', '', 'xd', m)
}
handler.help = ['gime']
handler.tags = ['premium']
handler.command = /^(gime)$/i
handler.admin = true
handler.premium = true
handler.fail = null
handler.exp = 100
module.exports = handler
