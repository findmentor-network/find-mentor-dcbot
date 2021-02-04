exports.run = (message) => {
	message.channel.send('Pong!').catch(console.error);
};

exports.help = {
	name: 'Ping'
};