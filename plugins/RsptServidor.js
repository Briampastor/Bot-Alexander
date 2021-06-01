let handler = m => m.reply('*Hola que tal tu dia??*\n\n*Buscas servidores de Tuenti,Claro,Cnt o Movistar...??? debes poner el comando #servers o #servers2 y enviare los servidores*')

handler.customPrefix = /Servidores|servidor|tcl|talleriame/i
handler.command = new RegExp
handler.group = true

module.exports = handler
