const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "509779507499237387"; 
var channel = "509779508044365824";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('JXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousefJXCOyousef')
    },305);
})


client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "302536427235704832") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });


client.login(process.env.BOT_TOKEN);
