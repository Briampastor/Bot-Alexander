let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let linkRegex = /https://www.google.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.datachat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link) {
 m.reply(`*「 ANTI ENLACE 」*\n\nDetectado *${name}* envió el enlace del grupo!\n\nLo siento, serás expulsado de este grupo.!`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
