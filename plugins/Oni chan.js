let handler = m => {
      conn.sendFile(m.chat, 'Oni chan.m4a', '', 'xd', m)
}

handler.customPrefix = /Onichan|oni chan|Oni chan|Oni Chan/i
handler.command = new RegExp
handler.group = true

module.exports = handler
