{await m.reply('*⏳Espera⌛*')}

let handler = m => {
      conn.sendFile(m.chat, 'Loli.mp4', '', 'xd', m)
}



handler.customPrefix = /Loli|loli|lolis|Lolis/i
handler.command = new RegExp

module.exports = handler
