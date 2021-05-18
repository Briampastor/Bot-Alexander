let handler = function (m) {
  // this.sendContact(m.chat, '593 98 763 4004', 'Arrow', m)
  this.sendContact(m.chat, '0', 'Insert Owner Number Here', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
