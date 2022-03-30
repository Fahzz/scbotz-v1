let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 DAY* :      *FREE.*
╠➥ *1 Minggu* :      *Rp 5.000*
╠➥ *PERMANEN* :   *Rp 10.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Dana/Gopay/Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 FAHZBOT 〙 ═`.trim(), '©Fahzz', 'Dana', '#viadana', 'Gopay', '#viagopay', m)
}

handler.command = /^sewabot$/i

module.exports = handler
