const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if ( ! who ) throw  'Etiqueta uno,e ingrese el número para verificación !'
  // si (participantes.map (v => v.jid) .includes (global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var  nomor  =  m . remitente
    m . respondedor ( `* Listo usuario agregado con exito✅ * \ n \ n * Nombre: wa.me / $ {nomor. split (" @ s.whatsapp.net ") [0]} \ n * Caducado: * 30Días \ n * ¡Gracias por agregar Premium! * ` )
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
