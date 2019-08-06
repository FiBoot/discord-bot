require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { logger, errorCheck } = require('./utils');

// CREATE CLIENT
const client = new Discord.Client();

// BIND EVENTS
fs.readdir('./events/', (error, files) =>
    errorCheck(error, files).then(files => {
        files.forEach(file => {
            const eventHandler = require(`./events/${file}`);
            const eventName = file.split('.')[0];
            client.on(eventName, arg => eventHandler(client, arg));
        });
    })
);

// START
logger.info('starting discord client..');
client.login(process.env.BOT_TOKEN).catch(e => errorCheck(e));
