let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${text}`).then ((res) => {
	 	let hasil = `*Película ${text}*\n\nTítulo : ${res.data.result.title}\nClasificación : ${res.data.result.rating}\nInformacion : ${res.data.result.sinopsis}\nLink Video : ${res.data.result.video}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['nombre de pelicula'].map(v => v + ' Película')
handler.tags = ['tools']
handler.command = /^(buscarpeli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
