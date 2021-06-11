let handler = m => {
      conn.sendFile(m.chat, 'Love3.mp4', '', '_BY:_ ✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Love3|love3|Lvd3|lvd3/i
handler.command = new RegExp
handler.group = true

module.exports = handler
