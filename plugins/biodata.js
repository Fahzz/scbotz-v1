let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉───
║│➸ *Nama* : Fahzz
║│➸ *Umur* : Privasi
║│➸ *Kelas* :  Kuliah
║│➸ *Status* : Have a good day
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉───
║│➸ *No.Owner* : wa.me/6285754180729
║│➸ *No.Bot* : wa.me/6285754180729
║│➸ *Chanel Youtube* : https://youtube.com/channel/UC1Xhscb6reAQVExWixAHQAA
║│➸ *Gmail* : fahrigcc@gmail.com
║│➸ *Github* : https://github.com/Fahzz
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'Recoded By Fahzz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
