const Discord = require('discord.js')
const db = require('quick.db')

module.exports.go = async(client,message,args) => {
    if (!args[0]){
        const arg = new Discord.MessageEmbed()
        .setDescription(`Reklam Engel için Doğru Kullanım: w?reklamengel aç / w?reklamengel kapat`)
        .setColor("RED")
        message.channel.send(arg)
    }
    if (args[0] === "aç"){
        const ac = new Discord.MessageEmbed()
        .setDescription(`Reklam Engel başarıyla açıldı! Artık reklamlar silinicek!`)
        .setColor("RED")
        message.channel.send(ac)
      
      db.set(`reklam_${message.guild.id}`, "acik")
    }
    if (args[0] === "kapat"){
        const kapat = new Discord.MessageEmbed()
        .setDescription(`Reklam Engel başarıyla kapatıldı! Artık reklamlar silinmeyecek!`)
        .setColor("RED")
        message.channel.send(kapat)
      
      db.set(`reklam_${message.guild.id}`, "kapali")
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  exports.help = {
    name: "reklamengel",
    description: "Reklam engel açar yada kapatır.",
    usage: "reklam-engel"
  }