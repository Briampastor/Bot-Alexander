let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
{m.reply('*Un nuevo admin se agrego al grupo @subject con exito✅*')}
{

      conn.sendFile(m.chat, 'Vos del bot.m4a', '', 'xd', m)

}
}
handler.help = ['quitaradmin','member','v'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(quitaradmin|omember|ov)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
