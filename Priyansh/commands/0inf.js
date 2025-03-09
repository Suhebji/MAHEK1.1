module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/Kj2CmiZ.jpegv" , "https://i.postimg.cc/020LvZCH/Whats-App-Image-2025-03-09-at-1-04-14-PM.jpg" , "https://i.postimg.cc/FK7qjvX2/Whats-App-Image-2025-03-09-at-1-04-13-PM.jpg"];
var callback = () => api.sendMessage({body: ` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇵🇰𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇵🇰  
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️Bot Name︎︎︎☄️  global.config.BOTNAME

🔥Bot Admin🔥☞︎︎︎☜︎︎︎✰ Mahak Jutti 💖💫

🙈Bot Admin     Owner Facebook ID Link🙈➪ [Facebook Profile](https://www.facebook.com/share/15nAWLrSyv/) 💞🕊️



✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰{global.config.PREFIX}

♥️Bot Owner♥️ ☞︎︎︎☜︎︎︎✰ 𝗠𝗮𝗵𝗮𝗸 𝗝𝘂𝘁𝘁𝗶

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ juswa 

⚡Bot is running⚡{hours}:minutes:{seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤

🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞  
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓  
🌸✦✧✧✧✧✰🍒𝕞𝕒𝕙𝕒𝕜 𝕛𝕦𝕥𝕥𝕚🌿✰✧✧✧✧✦🌸  
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
