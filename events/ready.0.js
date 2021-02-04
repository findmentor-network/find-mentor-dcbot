module.exports = (client) => {
	client.user
	.setActivity("Mentors & Mentees", { type: "WATCHING" })
	.then((presence) => {
		console.log()
		console.log(`[LOG: BOT] Logged in as ${client.user.tag}!`)
		console.log(`[LOG: BOT] Activity set to ${presence.activities[0].name}`)
	}).catch(console.error);
};