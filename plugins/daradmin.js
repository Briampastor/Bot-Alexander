let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
{m.reply('*Un nuevo admin se agrego con exito✅*')}
{

      conn.sendFile(m.chat, 'Admin.opus', '', 'xd', m)

}
}
handler.help = ['daradmin','admin','^'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(daradmin|oadmin|o\^)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
