// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Ingrese un informe'
    if (text.length > 300) lanzar 'Lo siento texto demasiado largo, máximo 300 texto!'
    const laporan = `*「 REPORTE 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️Se han informado problemas al propietario del robot, no se responderá a los informes falsos / main2!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
