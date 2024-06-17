module.exports = {
  config: {
    name: "r",
    role: 0,
    author: "rupok",
    countDown: 5,
    longDescription: "Randomvideo",
    category: "randomvideo",
    guide:{
      en: "{pn} <video>"
    } 
  },
   onStart: async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var romim = [
    "https://a6-video-api.onrender.com/video/football","https://a6-video-api-1s.onrender.com/video/messi",
   "https://a6-video-api.onrender.com/video/neymar",
    "https://a6-video-api.onrender.com/video/cr7",
    "https://a6-video-api.onrender.com/video/editfff",
  "https://a6-video-api.onrender.com/video/sadff",
  "https://a6-video-api.onrender.com/video/sakib",
  "https://a6-video-api.onrender.com/video/hazy",
    "https://a6-video-api.onrender.com/video/sigma",

"https://a6-video-api.onrender.com/video/ff",

"https://a6-video-api.onrender.com/video/white01",

"https://a6-video-api.onrender.com/video/bonex",

"https://a6-video-api.onrender.com/video/sadff",

"https://a6-video-api.onrender.com/video/islamic",

"https://a6-video-api.onrender.com/video/horny",

"https://a6-video-api.onrender.com/video/editff",

"https://a6-video-api.onrender.com/video/love",

"https://a6-video-api.onrender.com/images/nude",

"https://a6-video-api.onrender.com/images/sex",

"https://a6-video-api.onrender.com/video/horny",

  ]
  var romim1 = romim[Math.floor(Math.random() * romim.length)]
  axios.get(romim1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let romim2 = res.data.romim;
  let callback = function () {
          api.sendMessage({
            body: `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰𝙿𝙸 𝚂𝙴𝙽𝙳 𝚅𝙸𝙳𝙴𝙾                           𝚁𝙰𝙽𝙳𝙾𝙼 𝚅𝙸𝙳𝙴𝙾\n\n｢ 𝚜𝚑𝚎𝚒𝚔𝚑 𝚛𝚞𝚙𝚘𝚔 ｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Romim2.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Romim2.mp4`), event.messageID);
        }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Romim2.mp4`)).on("close", callback);
      })
   } 
}