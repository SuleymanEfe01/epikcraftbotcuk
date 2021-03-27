const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('<a:Uyar:800986373263720469> | Doğru Kullanım : !şikayet <Şikayetiniz>') 

return message.channel.send(embed)  
}
  //lrowsxrd
const embed = new Discord.MessageEmbed()

.setColor('YELLOW')
.setThumbnail("https://cdn.discordapp.com/emojis/727894743987519489.gif?v=1")
.setDescription('<:YeilOnay:800985759326011432> | **Şikayetiniz Başarıyla İletildi**\n**En Yakın Zamanda İlgilenilecektir**')
.setFooter(`${message.author.tag} Kullanıcısının Şikayet Bildirdi`, message.author.avatarURL())
    

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("YELLOW")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının Şikayet **Bildirimi ;**`)

.addField(`<:ListePng:800985759242911744> | **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField("<:YeilOnay:800985759326011432> |  **Gönderilen Şikayet Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('806830720009502730').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir"],
    permLevel: 0
}

exports.help = {
    name: 'şikayet',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}