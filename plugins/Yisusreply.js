let handler = m => {
      conn.sendFile(m.chat, 'Yisusreply.opus', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Yisus|yisus|Yisuss|yiiisuus/i
handler.command = new RegExp
handler.group = true

module.exports = handler
