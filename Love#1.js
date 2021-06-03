let handler = m =>{

      conn.sendFile(m.chat, 'Love#1.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)

}

handler.customPrefix = /Love1|love1/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
