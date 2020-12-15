const { Client } = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
require('dotenv-flow').config();

const client = new Client();

client.commands = new Enmap();

fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`[LOG: LOADED EVT] ${evtName}`);
    client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      let props = require(`./commands/${file}`);
      let cmdName = file.split('.')[0];
      console.log(`[LOG: LOADED CMD] ${cmdName}`);
      client.commands.set(cmdName, props);
    });
  });

client.login(process.env.BOT_TOKEN);