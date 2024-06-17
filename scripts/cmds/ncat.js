module.exports = {
 config: {
 name: "cat",
 version: "1.0",
 author: "mahi", // hopeless 
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "cat") {
 return message.reply({
 body: "ᴅᴏɴ'ᴛ ᴄᴀʟʟ ᴄᴀᴛ ɪ𝙵 sʜᴇ ɪ𝚜ɴ'ᴛ ʜᴇʀᴇ !!",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/HCdw6jF/image.jpg")
 });
 }
 }
}