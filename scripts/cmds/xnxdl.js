const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "xnxdl",
    version: "1.3",
    author: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
    countDown: 5,
    role: 1,
    shortDescription: {
      vi: "Tải video từ X'N'X'X",
      en: "Download video from X'N'X'X"
    },
    longDescription: {
      vi: "Tải video XNXX từ XNXX (công khai)",
      en: "Download video XNXX from XNXX (public)"
    },
    category: "18+",
    guide: {
      vi: "   {pn} <url video X'N'X'X>: tải video từ X'N'X'X",
      en: "   {pn} <url video X'N'X'X>: download video from X'N'X'X"
    }
  },

  langs: {
    vi: {
      missingUrl: "Vui lòng nhập url video X'N'X'X (công khai) bạn muốn tải về",
      error: "Đã xảy ra lỗi khi tải video",
      downloading: "Đang tiến hành tải video cho bạn",
      tooLarge: "Rất tiếc không thể tải video cho bạn vì dung lượng lớn hơn 83MB"
    },
    en: {
      missingUrl: "Please enter the X'N'X'X video (public) url you want to download",
      error: "An error occurred while downloading the video",
      downloading: "Downloading video for you",
      tooLarge: "Sorry, we can't download the video for you because the size is larger than 83MB",
       permission: "You don't have enough permissions to use this command, Only VIP users can use this command"
    }
  },

  onStart: async function ({ args, event, message, getLang }) {
    if (!args[0]) {
      return message.reply(getLang("missingUrl"));
    }

    let msgSend = null;
    try {
      const response = await axios.get(`https://all-in-one-api-by-faheem.replit.app/api/download/xnxx?url=${args[0]}`);

      if (response.data.success === false) {
        return message.reply(getLang("error"));
      }

      msgSend = message.reply(getLang("downloading"));

      const stream = await global.utils.getStreamFromURL(response.data.result.url);
      const Time = response.data.processed;
      const title = response.data.result.title;
      const views = response.data.result.views;
      const likes = response.data.result.duration;
      const quality = response.data.result.quality;

      await message.reply({ body: `♻Command By ♪♪ 𝐗𝐍𝐈𝐋 ♪♪\n\n🈴Title: ${title}\n🕕Processing Time: ${Time}\n💌Views: ${views}\n🕐Duration: ${likes}\n📺Quality: ${quality}`,
        attachment: stream });

      message.unsend((await msgSend),event.messageID);
    }
    catch (e) {
      message.unsend((await msgSend),event.messageID);
      return message.reply(getLang("tooLarge"));
    }
  }
};