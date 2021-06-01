let handler = function (m) {
  {m.reply('*Hola👋,el es mi creador⚡Arrow_OG⚡es muy sexy y pingon xd*')}
  // this.sendContact(m.chat, '593987634004', 'Arrow', m)
  this.sendContact(m.chat, '593960178180', 'Arrow', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
