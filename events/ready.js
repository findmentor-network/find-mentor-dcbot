module.exports = client => {
    console.log(`[LOG: READY] Logged in as ${client.user.tag}!`);
    client.user.setActivity('Mentors & Mentees', { type: 'WATCHING' })
        .then(presence => console.log(`[LOG: READY] Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
};