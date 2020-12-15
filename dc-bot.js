require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! and prefix is ${process.env.BOT_PREFIX}`);
});

client.on("message", message => {
	if (message.author.bot) return;
	// The process.env.BOT_PREFIX is your bot's prefix in this case.
	if (message.content.indexOf(process.env.BOT_PREFIX) !== 0) return;

	// This is the usual argument parsing we love to use.
	const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// And our 2 real basic commands!
	if (command === 'ping') {
		message.channel.send('Pong!');
	} else
	if (command === 'blah') {
		message.channel.send('Meh.');
	}
});

client.login(process.env.BOT_TOKEN);