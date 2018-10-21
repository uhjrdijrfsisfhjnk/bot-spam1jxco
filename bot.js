const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "497499938448605194"; 
var channel = "498890133450391574";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('yousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7i00')
    },305);
})


client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "501376527251013661") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });

client.on('ready',async () => {
  let GUILDID = '497502071218503721';
  let CHANNELID = '501092028306685973'; 
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
