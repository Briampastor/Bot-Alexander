let handler = m => {
      conn.sendFile(m.chat, 'Ara Ara.m4a', '', 'xd', m)
}

handler.customPrefix = /Ara Ara|hara hara|Ara|Hara/i
handler.command = new RegExp
handler.group = true

module.exports = handler
