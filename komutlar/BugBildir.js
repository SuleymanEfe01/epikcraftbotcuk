const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('<a:Uyar:800986373263720469> | Doğru Kullanım : !bug <Bulduğunuz Bug>')    //ahmetosmantr#1453 

return message.channel.send(embed)  
}
  //lrowsxrd
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setThumbnail("https://cdn.discordapp.com/emojis/727894743987519489.gif?v=1")
.setDescription('<:YeilOnay:800985759326011432> | **Bulduğunuz Bug Başarıyla Bildirildi.**\n**En Yakın Zamanda İlgilenecektir**')
.setFooter(`${message.author.tag} Kullanıcısının Bug Bildirimi`, message.author.avatarURL())
    

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("RED")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının Bulduğu **Bug ;**`)

.addField(`<:ListePng:800985759242911744> | **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField("<a:Uyar:800986373263720469> |  **Gönderilen Bug Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('806825151072436254').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir"],
    permLevel: 0
}

exports.help = {
    name: 'bug',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}