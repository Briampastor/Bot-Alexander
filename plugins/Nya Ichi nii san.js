let handler = m => {
      conn.sendFile(m.chat, 'YAMETE KUDSAI.mp4', '', 'xd', m)
}

handler.customPrefix = /Ichinisan|ichinisian|ichinisan|Nya/i
handler.command = new RegExp

module.exports = handler