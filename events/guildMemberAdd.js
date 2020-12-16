module.exports = (client, member) => {
    const Discord = require('discord.js')
    const channelId = '788791079922040912' // welcome channel
    const channel = client.guild.channels.cache.get(channelId)
    
    console.log(member)

    const embedWelcome = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome ' + member.user.tag)
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail(member.user.avatarURL)
        .setTimestamp();
    
    channel.send(embedWelcome)
};