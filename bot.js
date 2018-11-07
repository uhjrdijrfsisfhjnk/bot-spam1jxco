const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);  
});

client.on('ready', async() => {
var server = "Id server";509779507499237387
var channel = "id room";509779508044365824
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.login("NTA5NzkwMDMyMjQ5MzU2MzA5.DsS6yw.vqBP9Jx6NJBBad8u-JYVG1UmJhA");
