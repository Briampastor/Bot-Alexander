let handler = function (m) {
  if (!m.quoted) throw false
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'El mensaje no fue enviado por bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete','borrar']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
