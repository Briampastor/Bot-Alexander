let handler = (m, { usedPrefix, command }) => {
let name = conn.getName(m.sender)
 m.reply(`
_Hola lo siento_ ${name},,
El comando *${m.text}*
_no está registrado en mi sistema porfavor para ver todas mis funciones usa_ ${usedPrefix}menu
`.trim())
}
handler.command = new RegExp

module.exports = handler
