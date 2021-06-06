let handler = async m => m.reply(`
╭─「 COMPRAR PREMIUM 」
│ 
│ > Ventajas :
│• ¡Límites ilimitados!
│• ¡Funciones premium utilizables!
│• ¡Puede agregar bots a grupos!
│
│ > Bonus :
│• ¡Recibido un código de regalo de la semana!
│
│ > Precio :
│• 10K / Mes (4 Minguu)
│• 30K / Año (12 Mes)
│• 50K / VIP (Permanen)
│
│ > Pago :
│• https://wa.me/593960178180
╰────
`.trim()) // Agréguese si quiere
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
