let handler = m => m.reply('*Adiós👋* %name, *✨Que descanses✨*')
// if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
const { MessageType } = require('@adiwajshing/baileys')
handler.customPrefix = /Adiós|Adios|adios/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
