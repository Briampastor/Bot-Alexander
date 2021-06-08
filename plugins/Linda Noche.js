let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'VID-20210608-WA0010.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}
handler.help = ['Noche']
handler.tags = ['premium']
handler.command = /^(Noche)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.limit = true
handler.registrar = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
