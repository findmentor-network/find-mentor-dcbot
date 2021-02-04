require("dotenv").config();

const { Client } = require("discord.js"),
  fs = require("fs"),
  Enmap = require("enmap"),
  conf = require('./dc_conf.json'),
  client = new Client();

client.commands = new Enmap();
console.log()

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(conf.prefix) !== 0) return;

  const args = message.content.slice(conf.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
  if (!cmd) return;

  cmd.run(client, message, args);
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    let evt = require(`./events/${file}`);
    let evtName = file.split(".")[0];

    console.log(`[LOG: LOADED EVT] ${evtName}`);
    client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir("./commands/", async (err, files) => {
  if (err) return console.error;

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    let props = require(`./commands/${file}`);
    let cmdName = file.split(".")[0];

    console.log(`[LOG: LOADED CMD] ${cmdName}`);
    client.commands.set(cmdName, props);
  });
});

client.login(process.env.BOT_TOKEN);
