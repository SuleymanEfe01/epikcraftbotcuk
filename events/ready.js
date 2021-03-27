const ayarlar = require('../ayarlar.json')//ahmetosmantr#1453
const discord = require('discord.js')//ahmetosmantr#1453
const request = require('request')//ahmetosmantr#1453
//ahmetosmantr#1453
module.exports = client => {
    client.user.setStatus("online");
    const port = ayarlar.port
    const ip = ayarlar.ip

    request(`http://mcapi.us/server/status?ip=${ip}&port=${port}`, function (error, response, body) {
      if (error) return console.log('Error:', error);
          var info = JSON.parse(body);
  client.user.setActivity(`${info.players.now} Kişi EpikCraft`);
})
//ahmetosmantr#1453
    setInterval(() => { 
        request(`http://mcapi.us/server/status?ip=${ip}&port=${port}`, function (error, response, body) {
            if (error) return console.log('Error:', error);
                var info = JSON.parse(body);
        client.user.setActivity(`${info.players.now} Kişi EpikCraft`);
        console.log("Online Sayısı Yenilendi")
      })
    }, 50000);
 }