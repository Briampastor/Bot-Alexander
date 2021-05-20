let handler = function (m) {
  // this.sendContact(m.chat, '593987634004', 'Arrow', m)
  this.sendContact(m.chat, '0', '593987634004', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
