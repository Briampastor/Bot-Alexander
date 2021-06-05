let handler = m => m.reply('*Adiós👋* @subject , *✨Que descanses✨*')



if (m.isGroup) who = m.mentionedJid[0]

const { MessageType } = require('@adiwajshing/baileys')
// if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
handler.customPrefix = /Adiós|Adios|adios/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
