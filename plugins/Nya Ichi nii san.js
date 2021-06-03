let handler = m => {
      conn.sendFile(m.chat, 'Nya Ichi nii san.mp4', '', '✨𝐁𝐨𝐭 𝐀𝐫𝐫𝐨𝐰✨', m)
}

handler.customPrefix = /Ichinisan|ichinisian|ichinisan|Nya/i
handler.command = new RegExp
handler.group = true

module.exports = handler
