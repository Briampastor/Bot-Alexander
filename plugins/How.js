let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa yang *${command.replace('porcentaje', '').toUpperCase()}*`
  conn.reply(m.chat, `
${command} *${text}*
*${text}* es *${Math.floor(Math.random() * 101)}*% ${command.replace('porcentaje', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'presumido', 'inteligente', 'hermoso', 'perro', 'loco', 'lesbiana', 'estresado', 'bulgar', 'grilla', 'chicotriste'].map(v => 'porcentaje' + v + ' siapa?')
handler.tags = ['premium']
handler.command = /^ porcentaje (gay | presumido | inteligente | hermoso | perro | loco | lesbiana | estresado | bulgar | grila | chicotriste) / i
handler.owner = false
handler.mods = false
handler.limit = true
handler.registrar = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
