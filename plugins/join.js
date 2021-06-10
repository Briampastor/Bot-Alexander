let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*Link invalido porfavor ingrese un enlace válido*'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`)
}
handler.help = ['agregarbot [chat.whatsapp.com]']
handler.tags = ['premium']

handler.command = /^agregarbot$/i
handler.admin = true
handler.premium = true

module.exports = handler
