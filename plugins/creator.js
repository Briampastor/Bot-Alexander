let handler = function (m) {
  {m.reply('*Hola👋 este es mi creador ⚡Arrow_OG⚡*')}
  // this.sendContact(m.chat, '593987634004', 'Arrow', m)
  this.sendContact(m.chat, '593960178180', 'Arrow', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
