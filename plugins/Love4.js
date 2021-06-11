let handler = m => {
      conn.sendFile(m.chat, 'Love4.mp4', '', '*_BY:_* ✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Love4|love4|Lbd4|lbd4/i
handler.command = new RegExp
handler.group = true

module.exports = handler
