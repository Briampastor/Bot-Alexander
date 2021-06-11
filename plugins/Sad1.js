let handler = m => {
      conn.sendFile(m.chat, 'Sad1.mp4', '', '_BY:_ ✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Sad1|sad1|S1|s1/i
handler.command = new RegExp
handler.group = true

module.exports = handler
