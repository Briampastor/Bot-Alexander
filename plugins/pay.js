let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw '*Ingrese la cantidad de exp que se dará*'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiqueta uno'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw '*Solo números porfavor*'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw '*Exp insuficiente para transferir*'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Pajak 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP transferido con éxito✅`, who, m.text)
}
handler.help = ['transferir @user cantidad']
handler.tags = ['xp']
handler.command = /^transferir$/
handler.rowner = false
handler.registrar = true

module.exports = handler

