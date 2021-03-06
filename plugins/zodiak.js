let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [nama, lahir] = text.split `|`

    if (!nama) return conn.reply(m.chat, 'por favor, escriba su nombre', m)
    if (!lahir) return conn.reply(m.chat, 'Ingresa tu fecha de nacimiento correctamente!\n\nContoh : !zodiak ilham|11-5-04', m)

  await m.reply('buscando...')
	axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=${nama}&tgl-bln-thn=${lahir}`).then ((res) => {
	 	let hasil = `*INFO ZODIAK*\n\nLahir : ${res.data.lahir}*\nUltah : ${res.data.ultah}\nUsia : ${res.data.usia}\nZodiak : ${res.data.zodiak}️`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['zodiak'].map(v => v + ' <nama|tgl-bln-thn>')
handler.tags = ['primbon']
handler.command = /^(zodiak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
