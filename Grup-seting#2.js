let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = { // Switch Case Like :v
		'abierto': false,
		conn.reply(m.chat, `*Grupo abierto con éxito✅!*`, m)
		'cerrado': true,
		conn.reply(m.chat, `*Grupo cerrado con éxito✅!*`, m)
	}[(args[0] || '')]
	await conn.updatePresence(m.chat, Presence.composing)
	if (isClose === undefined)
		throw `
*_¡Formato erróneo!_*
  
   ──────❲ *✨Ejemplo✨:* ❳────────
   
  *├━⊱ ${usedPrefix + command} cerrado*
  *├━⊱ ${usedPrefix + command} abierto*
`.trim()
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grupe *abierto / cerrado*']
handler.tags = ['group']
handler.command = /^(grupe)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
