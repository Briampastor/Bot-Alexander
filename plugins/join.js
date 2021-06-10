let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*Link invalido porfavor ingrese un enlace válido*'
    let res = await conn.acceptInvite(code)
    m.reply(`Se unió con éxito al grupo ${res.gid}`)
}
handler.help = ['aggbot [chat.whatsapp.com]']
handler.tags = ['premium']

handler.command = /^aggbot$/i
handler.admin = true
handler.premium = true

module.exports = handler
