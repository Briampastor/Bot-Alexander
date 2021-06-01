let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `Utilizar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar di list pesan`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`Mensaje agregado exitosamente en la lista de mensajes como '${text}'
    
Akses dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler
