// SC By Arya
// Recode By RC047 :V

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, participants, isPrems }) => {
let who
  if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  if (!text) throw '🔥Etiqueta a las personas que se convertirán en premium🔥!'
 // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  let user = `${who.split("@s.whatsapp.net")[0]}`
  let up = global.prems.push(user)
    m.reply(`*Listo usuario agregado con exito✅*\n\nNombre : wa.me/${who.split("@s.whatsapp.net")[0]}\nCaduca en : 30 Días\n\n✨Gracias por comprar Premium✨!`)
 // } else m.reply('Ada nomor host disini...')

{

      conn.sendFile(m.chat, 'premium.opus', '', 'xd', m)

}
  
}
handler.help = ['hacerpremium nombre']
handler.tags = ['owner']
handler.command = /^hacerpremium$/i
handler.rowner = true

module.exports = handler
