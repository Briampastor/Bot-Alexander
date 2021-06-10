
let handler = m => {
      conn.sendFile(m.chat, 'Loli.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}
m.reply('*Espera!!*')
handler.customPrefix = /Loli|loli|lolis|Lolis/i
handler.command = new RegExp
handler.group = true

module.exports = handler
