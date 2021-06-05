let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /group|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete').catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' el chat grupal está activado' + (isDelete ? 'Se limpiará' : 'mañana para siempre'), m)
}
handler.help = ['deletechat', 'deletechat group', 'mutechat', 'mutechat group']
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler

