module.exports = (client, member) => {
    const Discord = require('discord.js')
    const channelId = '788792659112099890' // logs channel
    const channel = client.channels.cache.get(channelId)
    
    //console.log(member)

    /*const embedWelcome = new Discord.MessageEmbed()
        .setColor('#FF5733')
        .setTitle(`Message deleted by `)
        .setDescription(`Goodbye <@${member.user.id}>! We hope we can see you here again!`)
        .setTimestamp();
    channel.send(embedWelcome)*/
};