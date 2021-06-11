let handler = m => {
      conn.sendFile(m.chat, 'Mclovin.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Mclovin|mclovin|Mcn|mcn/i
handler.command = new RegExp
handler.group = true

module.exports = handler
