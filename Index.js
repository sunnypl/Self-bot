const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const prefix = "!";
const keepAlive = require('./server')


client.on("ready", () => {
  console.log(`Token key : ['TOKEN']
`)
  console.log(`Token Value : ['Bot Token']
`)
  console.log(`Prefix : ${prefix}`)
  client.user.setActivity({ type: "WATCHING", name: `less train brabo` });
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'dm')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply('You do not have permission to use this bot.')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] successful message | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] O member may have DM's disabled or Bot Fell | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] SUCESSO.`)
      message.channel.send(`⚡ | **DM ENVIADO COM SUCESSO | BY PHMALUCO.**`).then(message.delete({ timeout: 15000 }));
    }
  }

})

keepAlive();
client.login(process.env.TOKEN);
