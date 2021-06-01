let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 500
    m.reply('+500 XP')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else throw '✨Has reclamado el monto diario de hoy pavo/a✨.i'
}
handler.help = ['Claim', 'claim']
handler.tags = ['xp']
handler.command = /^(Claim|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

