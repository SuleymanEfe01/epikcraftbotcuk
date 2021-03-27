const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');   //ahmetosmantr#1453
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Pink Code Share v12 boş altyapı hostlandı!");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {      //ahmetosmantr#1453
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);     //ahmetosmantr#1453
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);     //ahmetosmantr#1453
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);     //ahmetosmantr#1453
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {    //ahmetosmantr#1453
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;     //ahmetosmantr#1453
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
//KOMUTLAR BURAYA


//KOMUTLAR BİTİŞ
client.login(ayarlar.token);
//--------------------------------------------------------------------------------------\\

client.on("message", msg => {
  var dm = client.channels.cache.get("806194763019714561");
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL()}`)    //ahmetosmantr#1453
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});
//--------------------------------------------------------------------------------------\\










    //hg
client.on("guildMemberAdd", member => {  
    const kanal = member.guild.channels.cache.find(r => r.id === "806841138324832286"); //hg kanal id giriniz
    let user = client.users.cache.get(member.id);
      const ottomanhg = new Discord.MessageEmbed()
.setTimestamp()
.setColor('#8A2BE2') //virtualcode
   .setDescription("Hoşgeldin! <@" + member + "> Seninle Beraber **" + member.guild.memberCount + "** Kişiyiz.")   //ahmetosmantr#1453
   kanal.send(ottomanhg)   
  });
//bb /virtualcode
client.on("guildMemberRemove", member => {  
    const kanal = member.guild.channels.cache.find(r => r.id === "806841138324832286"); //bb kanal id giriniz
    let user = client.users.cache.get(member.id);
      const ottomanbb = new Discord.MessageEmbed()
.setColor('#8A2BE2') //virtualcode
  .setTimestamp()
   .setDescription("Görüşürüz! <@" + member + "> **" + member.guild.memberCount + "** Kişi Kaldık.")    //ahmetosmantr#1453
   kanal.send(ottomanbb)   
  });



  client.on('message', async (msg, member, guild) => {
    let i = await  db.fetch(`saas_${msg.guild.id}`)
        if(i === 'açık') {
          if (msg.content.toLowerCase() === 'sa') {
          msg.reply('Aleyküm Selam Hoşgeldin');      
        } 
        }
      });
	  
	  
	  
	  
	  
	 
     client.on("message", msg => {
  if (msg.content.toLowerCase() === "!ip") {
    msg.reply("**Oyna.EpikCraftTR.TK**");    //ahmetosmantr#1453
  } 
});



     client.on("message", msg => {
  if (msg.content.toLowerCase() === "!site") {
    msg.reply("https://epikcraft.denince.biz/");    //ahmetosmantr#1453
  }
});





