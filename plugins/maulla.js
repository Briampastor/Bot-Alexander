let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'maulla.m4a', '', 'xd', m)
}
handler.help = ['maulla']
handler.tags = ['premium']
handler.command = /^(maulla)$/i
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
