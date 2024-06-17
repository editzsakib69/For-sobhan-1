const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
  name: "natural",
  version: "1.1.0",
  role: 0,
  author: "Shamim",
  description: "Random natural videos",
  category: "Hình ảnh",
  guide: "natural video",
  cooldown: 5 // cooldown in seconds
};

module.exports.onStart = async ({ api, event, args }) => {
  try {
    const greetings = ["𝗡𝗔𝗧𝗨𝗥𝗔𝗟 𝗩𝗜𝗗𝗘𝗢 𝗕𝗬 𝐒𝐇𝐄𝐈𝐊𝐇 𝐑𝐔𝐏𝐎𝐊"];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    const videoLinks = [
      "https://drive.google.com/uc?id=1OaUSXG_ZcnM-uRlUDoiMSZcNxqLB-RLY",
      "https://drive.google.com/uc?id=1OVOIv2tS9ECPmSW9hi5-6puUJoIgk08c",
      "https://drive.google.com/uc?id=1OBQG1WZspty8t7sDhIOtLOUCdxwshU_x",
      "https://drive.google.com/uc?id=1OXpVkeycbAqhIBCg3ArwSEGgo_24gp7b",
      "https://drive.google.com/uc?id=1OOKFMo-6wRI68d9Wf4b1OWQny7emK3J2",
      "https://drive.google.com/uc?id=1OITDaEmgSM78h5UH1cq1AY-71LaA9r56",
      "https://drive.google.com/uc?id=1OTkFDkkb8RD8UQgeKoES4CIN5xY-WCA7",
      "https://drive.google.com/uc?id=1OcVDUYUFFYEP3l-Vkv9PKgehR0FJou1S",
      "https://drive.google.com/uc?id=1OMynK-uuJxire7p1-jLD3WenCSS1IoWM",
      "https://drive.google.com/uc?id=1O47DXwIjL0ite2M4Zwem5dcEmNRy91sZ"
    ];

    const randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

    const callback = () => {
      api.sendMessage(
        {
          body: `「 ${greeting} 」`,
          attachment: fs.createReadStream(__dirname + "/cache/15.mp4")
        },
        event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/15.mp4")
      );
    };

    return request(encodeURI(randomVideoLink))
      .pipe(fs.createWriteStream(__dirname + "/cache/15.mp4"))
      .on("close", callback);
  } catch (error) {
    console.error("Error in onStart:", error);
  }
};