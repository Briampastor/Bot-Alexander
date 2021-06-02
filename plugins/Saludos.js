let handler = m => m.reply('*Hola👋 que tal como va tu dia ??*\n\n*Que tengas un exelente dia,tarde o noche... y si vas a dormir descansa mañana es un nuevo inicio*')

handler.customPrefix = /días|dias|tardes|Tardes|Dias|Días||dia|Dia|Día|Noches|noches|Buenas|buenas|buen|Buen/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
