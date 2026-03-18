const process = require("node:process");
const { botToken } = require("./config.json");
const { onMessage, onReady, onExit } = require("./src/events");
const { errorCheck } = require("./src/utils");
const { Client, Events } = require("discord.js");

//  CLIENT
const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

// EVENTS
process.on("SIGINT", () => onExit(process, client));
client.on(Events.ClientReady, onReady);
client.on(Events.MessageCreate, onMessage);

// START
client.login(botToken).catch((e) => errorCheck(e));
