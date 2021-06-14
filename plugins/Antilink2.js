let handler = m => m

let linkRegex = /https:/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isLink = linkRegex.exec(m.text)

  if (chat.antiLink && isLink) {
    m.reply('*Eliminando...!!*')
conn.groupRemove(m.chat, [m.sender])
    if (global.opts['restrict']) {
       if (!user.isAdmin) return true
       conn.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
