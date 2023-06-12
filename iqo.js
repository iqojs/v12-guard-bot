const {Client} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const config = global.config = require("./iqo/Settings/Config.json");
const fs = require("fs");

fs.readdir("./iqo/iqoGuard", (err, files) => {
  if(err) return console.error(err);
  files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./iqo/iqoGuard/${file}`);
      if(!prop.configuration) return;
      client.on(prop.configuration.name, prop);
  });
});

client.login(config.Bot.token);

const iqovoice = config.Bot.botvoicejoinchannel
client.on('ready', () => {
  client.channels.cache.get(iqovoice).join();
  })

  process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[DİKKAT] Kırmızı Alarm!, Şurada kritik bir hata var:", promise, " Açıklama: ", reason.message);
});