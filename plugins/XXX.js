let handler  = async (m, { conn }) => {
      conn.sendFile(m.chat, 'Bot-Arrow10.png', '', text.trim(), m)
}
handler.help = ['xxx1']
handler.tags = ['premium']
handler.command = /^(xxx1)$/i
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
