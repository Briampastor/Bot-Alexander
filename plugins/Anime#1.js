let handler = m =>{

      conn.sendFile(m.chat, 'Anime#1.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)

}

handler.customPrefix = /Anime1|anime1/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler