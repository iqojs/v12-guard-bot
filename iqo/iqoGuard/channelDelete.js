const Discord = require("discord.js");
const config = require("../Settings/Config.json");
const panel = require("../Settings/Panel.json");
const moment = require("moment");
module.exports = async(channel) => {

    if (!panel.ChannelProtections) return;
    if (channel.guild.id !== config.Bot.server) return;
    const entry = await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = channel.guild.members.cache.get(id)
    if(id === config.Bot.owner) return;
    if(id === channel.guild.owner.id) return;
    let safezone = config.Guard.safezone || [];
    if(safezone.some(a => user.id === a)) return;
    let safebots = config.Guard.safebots || [];
    if(safebots.some(a => user.id === a)) return;
    if (entry.executor.id === client.user.id) return;

      await channel.clone().then(async kanal => {
        if (channel.parentID != null) await kanal.setParent(channel.parentID);
        await kanal.setPosition(channel.position);
        if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));
      });

      user.roles.cache.has(config.Guard.booster) ? user.roles.set([config.Guard.booster, config.Guard.jail]) : user.roles.set([config.Guard.jail]).catch();
      
      let iqoSaat = moment(Date.now()).format("HH:mm");
      let iqoGün = moment(Date.now()).format("DD");
      let iqoAy = moment(Date.now()).format("MM");
      let iqoYıl = moment(Date.now()).format("YYYY");
      let iqoWile = `${iqoGün} ${iqoAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${iqoYıl}`;

    const iqo = new Discord.MessageEmbed().setAuthor(user.user.tag, user.user.avatarURL()).setFooter(channel.guild.name, channel.guild.iconURL()).setColor("BLUE")

    await channel.guild.channels.cache.get(config.Guard.log).send(iqo
      .addFields({
        name: `**__Kullanıcı Bilgisi__:**`,
        value: `**\`•\` Kullanıcı: <@${user.id}> \n \`•\` Kullanıcı ID: \`${user.id}\`**`,
        inline: true
      }, {
        name: `**__Kanal Bilgisi__:**`,
        value: `**\`•\` Kanal İsmi: \`${channel.name}\` \n \`•\` Kanal ID: \`${channel.id}\`**`,
        inline: true
      }, {
        name: `**__Tarih Bilgisi__:**`,
        value: `**\`•\` Saat: \`${iqoSaat}\` \n \`•\` Gün/Ay/Yıl: \`${iqoWile}\`**`,
        inline: false
      })
      .setDescription(`${user} __adlı kullanıcı tarafından bir kanal silindi.__ \n\n **__Kanalı silen kullanıcının yetkisi alındı ve kanal tekrardan oluşturuldu.__**`));

}; 
  module.exports.configuration = {
      name: "channelDelete"
};