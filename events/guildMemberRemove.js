module.exports = (client, member) => {
    const Discord = require('discord.js')
    const channelId = '788860390950961152' // welcome channel
    const channel = client.channels.cache.get(channelId)
    
    //console.log(member)

    const embedWelcome = new Discord.MessageEmbed()
        .setColor('#FF5733')
        .setTitle('Goodbye ' + member.user.username + '!')
        .setDescription(`Goodbye <@${member.user.id}>! We hope we can see you here again!`)
        .setTimestamp();
    channel.send(embedWelcome)
};