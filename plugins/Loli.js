let handler = m => {
      conn.sendFile(m.chat, 'Loli.mp4', '', 'xd', m)
}

{await m.reply('*⏳Espera⌛*')}

handler.customPrefix = /Loli|loli|lolis|Lolis/i
handler.command = new RegExp

module.exports = handler
