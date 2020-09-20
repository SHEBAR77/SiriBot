const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzU3MDM5ODM5MTQ4Mzc2MTY2.X2amSg.qK0jfeXwr6UybKKOudIEDOaaoFM';

client.on('ready', () => {
  console.log('켜짐.');
});

client.on('message', (message) => {
  if(message.content === '시리야') {
    message.reply('네 부르셨나요?');
  }
});

client.login(token);