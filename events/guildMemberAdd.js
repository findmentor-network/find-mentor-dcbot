module.exports = (client, member) => {
    require('dotenv').config();
    const Discord = require('discord.js')
    const channel = client.channels.cache.get("786282663522074645")
    
    //console.log(member)

    const embedWelcome = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome ' + member.user.username + '!')
        .setDescription(`Welcome to the server <@${member.user.id}>! We hope you can enjoy here!`)
        .setTimestamp();
    channel.send(embedWelcome)
};