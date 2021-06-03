let handler = m => {
      conn.sendFile(m.chat, 'YAMETE KUDSAI.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Yamete|Kudasai|yamete|kudasai/i
handler.command = new RegExp
handler.group = true
handler.group = true

module.exports = handler
