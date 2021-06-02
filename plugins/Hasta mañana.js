let handler = m => m.reply('*Hola que tal como te fue ??*\n\n* espero hayas tenido un exelente día descansa mañana es un nuevo inicio *')

handler.customPrefix = /Hasta mañana|hasta mañana|Hasta Mañana/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
