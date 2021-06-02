let handler = m => m.reply('*Hola*\n\n*de nada*')

handler.customPrefix = /Gracias|gracias|Grácias/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler