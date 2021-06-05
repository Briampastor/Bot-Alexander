let handler = m => m.reply('*Adiós*\n\n*Que descanses*')

handler.customPrefix = /Adiós|Adios|adios/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler