let RendyGanteng = conn
await RendyGanteng.fakeReply(m.chat, 'Loading...', '0@s.whatsapp.net', '*BY ARROW_OG*')
let handler = m => {
      conn.sendFile(m.chat, 'Loli.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}
{m.reply('*Un nuevo admin se agrego con exito✅*')}
handler.customPrefix = /Loli|loli|lolis|Lolis/i
handler.command = new RegExp
handler.group = true

module.exports = handler
