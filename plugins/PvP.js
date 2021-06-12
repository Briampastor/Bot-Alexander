let handler = m => m.reply('*Ponme sala manco para romperte ese casco bot porcentaje de 20%*')

handler.customPrefix = /PvP|pvp|PVP/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler