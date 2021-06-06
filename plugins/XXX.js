let handler  = async (m, { conn }) => {
      conn.sendFile(m.chat, 'Bot-Arrow10.png', '', text.trim(), m)
}
handler.help = ['xxx']
handler.tags = ['premium']
handler.command = /^(xxx)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.registrar = true
handler.limit = false
handler.exp = 100
module.exports = handler
