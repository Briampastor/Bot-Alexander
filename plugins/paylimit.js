let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw '*✨Ingrese la cantidad de Límite que se otorgará✨*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Etiqueta uno pavo/a👻*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '*✴️Solo números porfavor✴️*'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'Minimal 1'
    let users = global.DATABASE._data.users
    if (limit > users[m.sender].limit) throw '*✨Límite insuficiente para transferir pavo/a✨*'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Impuesto 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} limite transferido con exito✅`, who, m.text)
}
handler.help = ['Transferirlimite @user Monto']
handler.tags = ['xp']
handler.command = /^transferirlimite$/
handler.rowner = false
handler.registrar = true

module.exports = handler

