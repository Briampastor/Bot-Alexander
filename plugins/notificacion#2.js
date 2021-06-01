let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: users } })
   ╔═══════════════════
╠═══「 NOTIFICACION 」═══
╠══ { mentionedJid: users } })Dada Por @⁨user
╠══  { contextInfo Mensaje: 
║TODO MIEMBRO MASCULINO CON UN CHISITO AHI ABAJO ES GEY*
╠══ Grupo: 
╠══ @subject
╚════════════════════
}
handler.help = ['noti','notificación2','notificacion2'].map(v => v + ' *[texto]*')
handler.tags = ['group']
handler.command = /^(noti|notificación2|notificacion2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

