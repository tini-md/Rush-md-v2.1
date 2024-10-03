const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
     react: "📜",
    desc: "get cmd list.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
animegirl: '',
fun: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}


let madeMenu = ` 
✨ *𝙷𝙸 𝚃𝙷𝙴𝚈 𝙸 𝙼 𝚁𝚄𝚂𝙷 𝙼𝙳 ${pushname}* 

𝚁𝚄𝚂𝙷 𝙼𝙳 𝚂𝙸𝙼𝙿𝙻𝙴 

  ┣🤖Bot Name: 𝚁𝚄𝚂𝙷 𝙼𝙳
  
  

┏━━━━━━━━━━━━━━━━━━━
┃  MAIN COMMAND ✨
┗━━━━━━━━━━━━━━━━━━━
 ${menu.main}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  DOWNLOAD COMMAND ✨
┗━━━━━━━━━━━━━━━━━━━
 ${menu.download}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  GROUP COMMAND ✨
┗━━━━━━━━━━━━━━━━━━━
 ${menu.group}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  OWNER COMMAND ✨
┗━━━━━━━━━━━━━━━━━━━
 ${menu.owner}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  CONVERT COMMAND ✨
┗━━━━━━━━━━━━━━━━━━━
 ${menu.convert}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  SERCH COMMAND ✨
┗━━━━━━━━━━━━━━━━━━━
 ${menu.search}
┗━━━━━━━━━━━━━━━

ᴄʀᴀᴛᴇᴅ ʙʏ 𝚁𝚄𝚂𝙷
   `

return await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/e1fd8689e69a7baa4920d.jpg"},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

