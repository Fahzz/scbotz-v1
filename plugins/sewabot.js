let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ 𝟏 DAY
├⬡ 1 MINGGU
├⬡ 2 MINGGU 
├⬡ PERMANEN
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐓𝐎𝐏𝐔𝐏 〕 ❉──────
║│➸ *Dana* : 085754180729
║│➸ *Gopay*: 085754180729
║│➸ *Owner*: wa.me/6285754180729
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 DAY', description: "FREE\nSewa bot 1 DAY.", rowId:".masuk"},
        {title: '2 Minggu', description: "Rp5.00/\nSewa bot 1 Minggu.", rowId:".masuk"},
        {title: '3 Minggu', description: "Rm10.000\nSewa bot 2 Minggu.", rowId:".masuk"},
        {title: 'PERMANEN', description: "Rm20.000\nSewa bot PERMANEN.", rowId:".masuk"},
        {title: 'Trial', description: "Free\nBot Free 1 Hari.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot Fahzz.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
