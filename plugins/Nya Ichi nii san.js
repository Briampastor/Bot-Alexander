let handler = m => {
      conn.sendFile(m.chat, 'Nya Ichi nii san.mp4', '', 'xd', m)
}

handler.customPrefix = /Ichinisan|ichinisian|ichinisan|Nya/i
handler.command = new RegExp
handler.group = true

module.exports = handler
