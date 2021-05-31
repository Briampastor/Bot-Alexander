let handler = m => {
      conn.sendFile(m.chat, 'resultado1.mp3', '', 'xd', m)
}

handler.customPrefix = /Servidores|servidor|server|servers/i
handler.command = new RegExp

module.exports = handler