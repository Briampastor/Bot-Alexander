let handler = m => m.reply('*Hola soy un bot🌚*\n\n*lo siento no puedo reponderte pero puedes enviarle un mensaje a mi creador desde este chat con el comando #reportar y el problema que tengas o el comando #creador y te enviare el numero de mi creador. Que tengas un buen día, bye👋*')

handler.customPrefix = /Hola|Servididor|Server|servers|hola|server|Que|tal|Buenas|noches|días|dias|hp|s|sombra|play|play2/i
handler.command = new RegExp
handler.private = true

module.exports = handler
