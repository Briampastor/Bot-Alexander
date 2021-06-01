let handler = m => m.reply('*Quien es lady??*\n\n*✨Lady ✨es el amor❤️ de la vida de Arrow... su pava🦃, su amiga👻, su esposa👩‍❤️‍👨 su todo que siempre esta a su lado🌹 y esta desde hace ya muchos años 🔥siempre el la cuida a ella y ella a el , estan muy enamorados 😍y ese amor tan grande durará toda la vida...✨ Te amo sol😘❣️*')

handler.customPrefix = /Lady|lady|ladysita|Hong/i
handler.command = new RegExp
handler.group = true

module.exports = handler
