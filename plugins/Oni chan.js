let handler = m => {
      conn.sendFile(m.chat, 'resultado1.mp3', '', 'xd', m)
}

handler.customPrefix = /Onichan|oni chan|Oni chan|Oni Chan/i
handler.command = new RegExp

module.exports = handler
