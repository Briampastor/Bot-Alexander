const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Usted ya está registrado\nQuiere volver a registrarse? ${usedPrefix}unreg <SN|NÚMERO DE SERIE>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Los nombres no pueden estar vacíos (Alphanumeric)'
  if (!age) throw 'La edad no puede estar vacía (Angka)'
  user.name = nombre
  user.age = parseInt(edad)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*Te has registrado con exitoso✔️*

╭─「 📄Informacion📄」
│ Nombre: ✨{name}✨
│ Edad: ✨{age}thn✨
│ SN: ✨{sn}✨
╰────
`.trim())
}
handler.help = ['lista', 'reg', 'Registrarse'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

