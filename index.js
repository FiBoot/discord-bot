require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { logger } = require('./utils');

// CREATE CLIENT
const client = new Discord.Client();

// BIND EVENTS
fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, arg => eventHandler(client, arg));
    });
});

// START
client.login(process.env.BOT_TOKEN).catch(e => {
  logger.error(e.message)
  logger.debug(e.stack)
});
