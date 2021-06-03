let handler = m => {
      conn.sendFile(m.chat, 'Oni chan.m4a', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Onichan|oni chan|Oni chan|Oni Chan/i
handler.command = new RegExp
handler.group = true

module.exports = handler
