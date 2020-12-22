module.exports = (client, member) => {
    require('dotenv').config();
    const Discord = require('discord.js')
    const channel = client.channels.cache.get("786282663522074645")
    
    //console.log(member)

    const embedWelcome = new Discord.MessageEmbed()
        .setColor('#FF5733')
        .setTitle('Goodbye ' + member.user.username + '!')
        .setDescription(`Goodbye <@${member.user.id}>! We hope we can see you here again!`)
        .setTimestamp();
    channel.send(embedWelcome)
};