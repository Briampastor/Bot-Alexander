let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_⌛Realizando prueba de velocidad⌛..._')
  let neww = performance.now()
  m.reply(neww - 'ms')
}
handler.help = ['ping2', 'speed2']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
