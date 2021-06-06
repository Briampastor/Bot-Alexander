let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'ArrowYArrowna.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}
handler.help = ['AyA1']
handler.tags = ['premium']
handler.command = /^(AyA1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
