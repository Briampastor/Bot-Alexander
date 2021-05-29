let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
{m.reply('*Se mato un admin con exito✅*')}
{

      conn.sendFile(m.chat, 'Ya no eres ádmin.opus', '', 'xd', m)

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
