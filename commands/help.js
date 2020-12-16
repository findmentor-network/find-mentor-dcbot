exports.run = (member, message, args) => {
    const Discord = require('discord.js')

    const embedWelcome = new Discord.MessageEmbed()
        .setColor('#FF5733')
        .setTitle('Help Message')
        .setDescription(`Our discord bot's /help command requested by <@${message.author.id}>`)
        .addFields(
            { name: 'Basic', value: '//roles\n/help\n/website\n/about', inline: true },
            { name: '\u200B', value: '/peer\n/mentorships\n/ping\n/info', inline: true },
            { name: 'Informational', value: '/serverinfo\n/pairhours\n/mentorhours\n/chitchat', inline: true },
            { name: 'Fun', value: '/coin-flip\n/8ball\n/meme\n/owo', inline: true },
            { name: '\u200B', value: '/cat\n/doggo\n/say\n/hug', inline: true },
            { name: '\u200B', value: '\u200B', inline: true }
        )
    message.channel.send(embedWelcome)};

exports.help = {
    name: 'help'
};