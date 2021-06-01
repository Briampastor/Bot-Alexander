let handler = m => {
      conn.sendFile(m.chat, 'Ara Ara.m4a', '', 'xd', m)
}

handler.customPrefix = /Hara Hara|hara hara|Hara/i
handler.command = new RegExp
handler.group = true

module.exports = handler
