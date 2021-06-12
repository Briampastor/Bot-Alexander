let { MessageType } = require('@adiwajshing/baileys')
let name = conn.getName(m.sender)
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: users } })
}
╭────❲ *✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨* ❳────╮
├┉┉┉┉↯❏ Dada por *${name}:* ❏↯┉┉┉
├┉↯                           
├┉┉┉┉↯❏  *YouTube:* ❏↯┉┉┉┉      
╰────❲✨✨✨✨✨✨✨❳────╯


handler.help = ['notificación','anuncio','noti','notificacion'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(notificación|anuncio|noti|notificacion)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

