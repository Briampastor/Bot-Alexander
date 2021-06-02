let handler = m => m.reply('*Hola👋 que tal como va tu dia ??*\n\n*Que tengas un exelente dia,tarde o noche... y si vas a dormir descansa mañana es un nuevo inicio🌚*')

handler.customPrefix = /buenos días|Buenos dias|buenas tardes|Buenas Tardes|Buenos Dias|buenos Días||buen dia|Buen dia|buen día|Buenas noches|noches|Buenas|hasta mañana|Hasta mañana|Buen/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
