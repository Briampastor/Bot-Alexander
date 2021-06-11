let handler = m => {
      conn.sendFile(m.chat, 'Estilo1.mp4', '', '*_BY:_* ✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Estilo1|estilo1|Etl1|etl1/i
handler.command = new RegExp
handler.group = true

module.exports = handler
