const axios = require('axios');
const rubishapi = global.GoatBot.config.rubishapi;

module.exports = {
  config: {
    name: "sms",
    aliases: ["sms-api"],
    version: "1.0",
    author: "RUBISH",
    countDown: 30, 
    role: 0,
    sthortDescription: "Free sms Sender",
    longDescription: "Sms sender goatbot api",
    category: "PREMIUM",
    guide : {
    en: "{pn} <number> - <your message>"
    }
  },

  onStart: async function ({ message, args }) {
    const [phoneNumber, messageText] = args.join(" ").trim().split(/\s*-\s*/);
    if (!phoneNumber || !messageText) {
      return message.reply(`
⚠️ | Please enter a number

Example➝ .sms 01819191980-hello`);
    } else {
      
      const obfuscatedNumber = phoneNumber.replace(/(?<=^\d{3})\d{5}(?=\d{2})/g, '*****');
      const url = `${rubishapi}/sms?number=${phoneNumber}&sms=${messageText}&apikey=rubish69`;
      try {
        const response = await axios.get(url);
        const form = {
          body: `
✅ | SMS Sent Successfully 

Number: ${obfuscatedNumber}

Message: ${messageText}`
        };
        message.reply(form);
      } catch (error) {
        console.error(error);
        message.reply("❌ | An error occurred while sending the SMS.");
      }
    }
  }
};