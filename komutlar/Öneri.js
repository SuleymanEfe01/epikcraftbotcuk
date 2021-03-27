const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  

  message.delete();

  let question1 = args.join(" ");
  let question2 = args.join(" ");

  let user = message.author.username;

  if (!question1) return message.channel.send(new Discord.MessageEmbed().setTitle(`Lütfen Önerinizi Belirtin`)).then(m => m.delete(({ timeout: 5000})));
  if (!question2) return message.channel.send(new Discord.MessageEmbed().setTitle(`Lütfen Katagori Belirtin`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("007bff")
        .setThumbnail(client.user.avatarURL())
        .setThumbnail(client.user.avatarURL)
        .setThumbnail("https://cdn.discordapp.com/emojis/727894743987519489.gif?v=1")
        .setTimestamp()
        .setFooter(`${message.author.tag} Kullanıcısının Önerisi`, message.author.avatarURL())
        .addField(` **Katagori**`, `\`SkyBlock\``)
        .addField(`**Önerisi**`, `\`${question1}\``)
        .setImage('https://cdn.discordapp.com/attachments/805881849465012295/806808794091880468/Olabilir_2.png')
    )
    .then(function(message) {
      message.react("👍");
      message.react("👎");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri-yap","öneri"],
  permLevel: 0
};

exports.help = {
  name: "öneri",
  description: "Oylama yapmanızı sağlamaktadır.",
  usage: "!oylama <oylamaismi>"
};