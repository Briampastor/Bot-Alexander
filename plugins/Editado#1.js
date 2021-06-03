let handler = m => {
      conn.sendFile(m.chat, 'media/'Editado#1.mp4', '', 'xd', m)
}

handler.customPrefix = /Edit1|editado1/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
