let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Ingrese el nombre de su película', m)

	axios.get(`https://repelis24.co//api/sdmovie?film=${text}`).then ((res) => {
	 	let hasil = `*Películas ${text}*\n\nJudul : ${res.data.result.title}\nClasificación : ${res.data.result.rating}\nInformación : ${res.data.result.sinopsis}\nEnlace del Video : ${res.data.result.video}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['buscar pelicula'].map(v => v + ' película')
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