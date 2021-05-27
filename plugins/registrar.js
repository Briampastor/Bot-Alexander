const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Usted ya está registrado \nQuiere volver a registrarse? ${usedPrefix}unreg <SN|NÚMERO DE SERIE>`
  if (!Reg.test(text)) throw `✨Porfavor Escribir bien sin espacips tal cual se indica✨\n*${usedPrefix}registrar nombre.edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Los nombres no pueden estar vacíos (Alphanumeric)'
  if (!age) throw 'La edad no puede estar vacía (Angka)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
{

      conn.sendFile(m.chat, 'registratado.mp3', '', 'xd', m)

}
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
El registro fue exitoso✅👌

╭─「 ⚡Información⚡ 」
│🔲◻️◽▫️✨Nombre✨: ${name}
│🔲◻️◽▫️🔥Edad🔥: ${age}años
│🔲◻️◽▫️💢SN💢: ${sn}
╰────「🔥🔥🔥🔥🔥🔥🔥」
`.trim())
}
handler.help = ['registrar', 'reg', 'register'].map(v => v + ' <nombre>.<edad>')
handler.tags = ['exp']

handler.command = /^(registrar|reg(ister)?)$/i

module.exports = handler

