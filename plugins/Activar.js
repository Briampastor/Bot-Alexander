let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'bienvenida':
      chat.welcome = isEnable
      break
    case 'Eliminar':
      chat.delete = isEnable
      break
    case 'antieliminar':
      chat.delete = !isEnable
      break
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antienlace':
      chat.antiLink = isEnable
      break
    case 'autosubirnivel':
      isUser = true
      user.autolevelup = isEnable
      break
    default:
      return m.reply(`
List option: bienvenida | eliminar | publico | antienlace | autosubirnivel | antitoxicos
Contoh:
${usedPrefix}enable Bienvenida
${usedPrefix}disable Bienvenida
`.trim())
  }
  m.reply(`
*${type}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
