const Discord = require("discord.js");
const config = require(".././Settings/Config.json");
module.exports = async () => {
    client.user.setPresence({ activity: { name: config.Bot.activity }, status: "dnd" });
    console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`)
    
  }; 
  module.exports.configuration = {
      name: "ready"
};