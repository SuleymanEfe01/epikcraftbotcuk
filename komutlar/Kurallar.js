const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setDescription(`
 > \`1. Kural -> Ağır Küfürler Etmek Yasaktır\`

 > \`2.Kural -> Yetkililere Hakaret Etmek Yasaktır\`

 > \`3.Kural -> Sunucu Spam Yapmak Yasaktır 3. Uyarıda Atılırsınız\`

 > \`4.Kural -> Yetkilileri Gereksiz Yere Etiketlemek Jail Sebebidir\`
 
 > \`5.Kural -> Sunucumuzda Reklam Yapmak Yasaktır Yapılırsa Yektililere Bildiriniz\`

 > \`6.Kural -> Sunucumuzda Din Veya Siyaset Konuları Açmak Yasaktır\`
 
 > \`Uyarı -> Sunucumuzda Mute Yerine Jail Sistemi Vardır Bu Kurallara Uymazsanız Mute Yerine Jail Yer Sınırsız Veya Yetkilinin Belirlediği Süre Sarfında Kanalları Göremezsiniz\``)
 .setFooter(`Lütfen Kurallara Uyalım`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/805824245245411409/807141876481916939/Kurallar_Gif_M3L1H_3.gif")
message.channel.send(embed) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',   //sharpen
  description: '',
  usage: ''
};