const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'info',
  version: '1.0.0',
  role :0,
  author: 'Rickciel',
  guide: 'Display bot owner information',
  commandCategory: 'system',
  usages: '',
  cooldowns: 20
};

module.exports.onStart  = async ({ api, event }) => {
  try {
    const ownerInfo = {
      name: 'sʜᴇɪᴋʜ ʀᴜᴘᴏᴋ',
      gender: 'Male',
      age: '16+',
      height: '5.8\'ft',
      facebookLink: 'https://www.facebook.com/share/B7CgjvS3i8nLbtNT/?mibextid=qi2Omg',
      status: '𝑯𝒂𝒕𝒆𝒓𝒔 𝒂𝒓𝒆 𝒎𝒚 𝒎𝒐𝒕𝒊𝒗𝒂𝒕𝒐𝒓𝒔'
    };
    const videoUrl = 'https://drive.google.com/uc?export=download&id=1JJwwQDPrHMKzLQq_AYHvlMNLjD-kTIMO'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Status: ${ownerInfo.status}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🤍', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};