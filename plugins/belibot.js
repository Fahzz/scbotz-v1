let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rp 5.00*
╠➥ *2 Minggu* :      *Rp 10.00*
╠➥ *3 Minggu* : *Rp 15.00*
╠➥ *1 Bulan* :   *Rp 20.00*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Topup/Pin
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 FAHZBOT 〙 ═`.trim(), '©Fahzz', 'Dana', '#viadana', 'Gopay', '#viagopay', m)
}

handler.command = /^sewabot$/i

module.exports = handler
