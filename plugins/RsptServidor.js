let handler = m => m.reply('*Hola que tal tu dia??*\n\n*Buscas servidores de Tuenti,Claro,Cnt o Movistar debes poner el comando #servidores y enviare los servidores*')

handler.customPrefix = /Servidores|servidor|server|servers/i
handler.command = new RegExp

module.exports = handler