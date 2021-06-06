let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
    {m.reply('⏳Procesando⏳')}
if (!text) return conn.reply(m.chat, 'No hay texto para buscar imagen', m)
let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', 'Fuente: *' + encodeURIComponent(text) + '*, m)
            await conn.sendFile(m.chat, erest, '', '_BY:_ ✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)                      

{

      conn.sendFile(m.chat, 'resultado1.mp3', '', 'xd', m)

}
}
handler.help = ['imagen']
handler.tags = ['images']
handler.command = /^imagen?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

handler.private = false
handler.registrar = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
