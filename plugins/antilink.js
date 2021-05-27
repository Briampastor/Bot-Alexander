let handler = m => m

let linkRegex = /chat.whatsapp.com\/https:// \([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link) {
 m.reply(`*「 ANTI LINK 」*\n\nDetected *${name}* has enviado un link en el grupo!\n\nLo siento. Serás expulsado de este grupo.!`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
