let handler = m => {
      conn.sendFile(m.chat, 'Yisusreply.opus', '', '*_BY:_* ✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Yisus2|yisus2|yisuss2|Hong/i
handler.command = new RegExp

module.exports = handler
