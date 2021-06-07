let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa yang *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
${command} *${text}*
*${text}* es *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'pintar', 'inteligente', 'hermoso', 'perro', 'loco', 'lesbiana', 'estresado', 'bulgar', 'zorra', 'chicotriste'].map(v => 'como' + v + ' siapa?')
handler.tags = ['premium']
handler.command = /^ como (gay | inteligente | hermoso | guapo | perro | loco | lesbiana | estresado | bulgar | zorra | chicotriste) / i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
