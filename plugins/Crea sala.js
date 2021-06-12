let handler = m => m.reply('*Tu crea sala.. yo no gasto salas en bots como tu.*')

handler.customPrefix = /Crea sala|crea sala|Crea Sala/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler