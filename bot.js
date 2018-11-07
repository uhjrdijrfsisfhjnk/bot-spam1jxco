const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {

console.log('iiFireGame');

});

client.on('message', message => {
    var prefix = "!";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
  
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'jxco')) {
        message.channel.send(''+x);
            message.delete(999)
    }
    
   
  });

  client.on('message', message => {
    if (message.content === 'spam') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`Jxco ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    



client.login("TOKEN");
