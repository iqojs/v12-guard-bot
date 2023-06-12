const Discord = require("discord.js");
const config = require(".././Settings/Config.json");
const panel = require("../Settings/Panel.json");
const moment = require("moment");
module.exports = async(emoji) => {

    if (!panel.EmoteProtections) return;
    if (emoji.guild.id !== config.Bot.server) return;
    const entry = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_DELETE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = emoji.guild.members.cache.get(id)
    if(id === config.Bot.owner) return;
    if(entry.executor.id === client.user.id) return;
    if(id === emoji.guild.owner.id) return;
    let safezone = config.Guard.safezone || [];
    if(safezone.some(a => user.id === a)) return;
    let safebots = config.Guard.safebots || [];
    if(safebots.some(a => user.id === a)) return;

      emoji.guild.emojis.create(emoji.url, emoji.name)
      
      user.roles.cache.has(config.Guard.booster) ? user.roles.set([config.Guard.booster, config.Guard.jail]) : user.roles.set([config.Guard.jail]).catch();

      let iqoSaat = moment(Date.now()).format("HH:mm");
      let iqoGün = moment(Date.now()).format("DD");
      let iqoAy = moment(Date.now()).format("MM");
      let iqoYıl = moment(Date.now()).format("YYYY");
      let iqoWile = `${iqoGün} ${iqoAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${iqoYıl}`;

   const iqo = new Discord.MessageEmbed().setAuthor(user.user.tag, user.user.avatarURL()).setFooter(emoji.guild.name, emoji.guild.iconURL()).setColor("BLUE")

 await emoji.guild.channels.cache.get(config.Guard.log).send(iqo
  .addFields({
    name: `**__Kullanıcı Bilgisi__:**`,
    value: `**\`•\` Kullanıcı: <@${user.id}> \n \`•\` Kullanıcı ID: \`${user.id}\`**`,
    inline: true
  }, {
    name: `**__Emoji Bilgisi__:**`,
    value: `**\`•\` Emoji İsmi: \`${emoji.name}\` \n \`•\` Emoji ID: \`${emoji.id}\`**`,
    inline: true
  }, {
    name: `**__Tarih Bilgisi__:**`,
    value: `**\`•\` Saat: \`${iqoSaat}\` \n \`•\` Gün/Ay/Yıl: \`${iqoWile}\`**`,
    inline: false
  })
  .setDescription(`${user} __adlı kullanıcı tarafından bir emoji silindi.__ \n\n **__Emoji silen kullanıcının yetkisi alındı ve emoji tekrardan oluşturuldu.__**`));

}; 
  module.exports.configuration = {
      name: "emojiDelete"
};