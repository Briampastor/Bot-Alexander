// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw '*Ingrese el informe del tipo de error que tienes para que mi creador lo pueda solucionar*'
    if (text.length > 300) throw '*X* _Lo siento texto demasiado largo_ *X*, ✴️_Máximo 300 texto_✴️!'
    const laporan = `*「 REPORTE 」*\n*✨Nombre✨:* wa.me/${m.sender.split`@`[0]}\n*Mensaje📬:* ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '593987634004@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('*📩El problema ha sido informado a mi creador con éxito📨✅* , *informes falsos no seran respondido*!')
}
handler.help = ['bug', 'reportar'].map(v => v + ' informe')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
