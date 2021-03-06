let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*Link invalido porfavor ingrese un link válido*'
    let res = await conn.acceptInvite(code)
    m.reply(`*listo se agrego el bot correctamente✅* ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.admin = true

handler.premium = true

module.exports = handler
