
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
  });
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', () => {
  console.log(`✅ | Logged in as ${client.user.tag}`);
});

client.on("messageCreate", message => {
    if (message.content.startsWith("bc")) {
      if (!message.member.permissions.has("Administrator")) return;
      let r= message.content.split(" ").slice(1).join(" ")
            let x = new EmbedBuilder()
        .setTitle(`**:x: Type your broadcast message !**`)
        .setTimestamp()
      if (!r) return message.channel.send({ embeds: [x] });
      message.guild.members.cache
        .forEach(m => {
          if (m.user.bot) return;
          m.send({ content: `${r}\n ${m}` })
            .then(() => {
              console.log(`✅ Successfully ${m.user.tag} `);
            })
            .catch(function() {
              console.log(`❌❌❌❌ DM Closed / Bot has been Banned / Closed DM from Server / Block The Bot : ${m.user.tag}`);
            });
        });
      let succ = new EmbedBuilder()
        .setTitle(
          `✅Successfully sent to all members!`
        )
        .setTimestamp()
        message.channel.send({embeds:[succ]})
    }
  });  
  client.login(process.env.TOKEN);
