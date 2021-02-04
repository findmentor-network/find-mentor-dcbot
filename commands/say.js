exports.run = (message, args) => {
	const response = args.join(' ');
	message.delete();
	message.channel.send(response);
};

exports.help = {
	name: 'Say'
};