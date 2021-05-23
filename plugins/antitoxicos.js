let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 ☢️ANTI TOXICOS☢️ 」*

Pengirim : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Pesan : ${m.text}

Acostúmbrate a No seas tóxico! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /antitoxicos|memek|kontol|goblok|goblog/i
handler.command = new RegExp

module.exports = handler