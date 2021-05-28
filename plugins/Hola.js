let handler = m => m.reply('*Hola👻\n\n¿En que te puedo ayudar pavo/a🦃? ✴️Escribe *#help* o *#Menú* para que puedas ver mis funciones✴️')

handler.customPrefix = /Hola|hola|Oa|Hong/i
handler.command = new RegExp

module.exports = handler