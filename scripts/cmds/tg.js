let axios = require("axios");

module.exports = {
  config: {
    name: "tg",
    aliases: [`telegraph`],
    version: "1.0",
    author: "Samir Œ",
    countDown: 0,
    role: 0,
    description: "𝗚𝗲𝘁 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝘂𝗿𝗹 𝗳𝗿𝗼𝗺 𝘃𝗶𝗱𝗲𝗼, 𝗮𝘂𝗱𝗶𝗼 𝘀𝗲𝗻𝘁 𝗳𝗿𝗼𝗺 𝗴𝗿𝗼𝘂𝗽",
    category: "𝗧𝗢𝗢𝗟𝗦",
    guide: "{pn} reply or add link of image"
  },

  onStart: async function ({ api, event }) {
    let { messageReply, threadID } = event;

    if (event.type !== "message_reply") {
      return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
    }

    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) {
      return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
    } else {
      let num = 0;
      let msg = `There is ${messageReply.attachments.length} file attached:\n`;

      for (var i = 0; i < messageReply.attachments.length; i++) {
        var shortLink = await require('tinyurl').shorten(messageReply.attachments[i].url);
        var like = `https://apis-samir.onrender.com/telegraph?url=${encodeURIComponent(shortLink)}&senderId=${event.senderID}`;

        try {
          let response = await axios.get(like);
          let link = response.data.result.link;

          num += 1;
          msg += `${num}: ${link} \n`;
        } catch (error) {
          console.error("Error fetching link:", error);
          msg += `${num}: Error fetching link\n`;
        }
      }

      api.sendMessage(msg, threadID);
    }
  }
};