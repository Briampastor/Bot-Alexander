let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isLink = linkRegex.exec(m.text)

  if (chat.antiLink && isLink) {
  m.reply('*Adiós👋 rompiste las reglas serás exterminado*')
  m.reply('*tienes 3 segundos para eliminar el link :v*')
    m.reply('*En 3!!*')
    m.reply('*2!!*')
    m.reply('*1!!*')
    
    m.reply('*Eliminando!!*')
conn.groupRemove(m.chat, [m.sender])
    if (global.opts['restrict']) {
       if (!user.isAdmin) return true
       conn.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
