let handler = m => m.reply('*Hola soy un bot🌚*\n\n_¿En que te puedo ayudar pavo/a🦃? Escribe_ *#help* o *#Menú* _para que puedas ver mis funciones_ .')

handler.customPrefix = /Hola|hola|Oa/i
handler.command = new RegExp
handler.group = true

module.exports = handler
