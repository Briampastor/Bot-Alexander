let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /activar|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'bienvenida':
      chat.welcome = Activar
      break
    case 'Eliminar':
      chat.delete = isActivar
      break
    case 'antieliminar':
      chat.delete = !isActivar
      break
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isActivar
      break
    case 'antienlace':
      chat.antiLink = isActivar
      break
    case 'autosubirnivel':
      isUser = true
      user.autolevelup = isActivar
      break
    default:
      return m.reply(`
List option: bienvenida | eliminar | publico | antienlace | autosubirnivel | antitoxicos
Contoh:
${usedPrefix}Axtivar Bienvenida
${usedPrefix}Desactivar Bienvenida
`.trim())
  }
  m.reply(`
*${type}* exitoso en *${isActivar ? 'nyala' : 'mati'}kan* ${isAll ? 'por bot esto' : isUser ? '' : 'para este chat'}
`.trim())
}
handler.help = ['acti', 'desacti'].map(v => v + 'var <option>')
handler.tags = ['group']
handler.command = /^((acti|desacti)var|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
