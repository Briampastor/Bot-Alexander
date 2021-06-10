let handler = m => m.reply('_*Si... si estoy aqui.*_👻\n\n_Tamos ready baby¿En que te puedo ayudar pavo/a🦃? Escribe_ *#help* o *#Menú* _para que puedas ver mis funciones._')

handler.customPrefix = /Bot|kuhong|hong|Hong/i
handler.command = new RegExp
handler.group = true

module.exports = handler
