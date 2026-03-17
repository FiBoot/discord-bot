const process = require("node:process");
const { botToken } = require("./config.json");
const { onMessage: handleMessage, onReady: handleReady, onExit: handleExit } = require("./src/events");
const { errorCheck } = require("./src/utils");
const { Client, Events } = require("discord.js");

//  CLIENT
const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

// EVENTS
process.on("SIGINT", () => handleExit(process, client));
client.on(Events.ClientReady, handleReady);
client.on(Events.MessageCreate, handleMessage);

// START
client.login(botToken).catch((e) => errorCheck(e));
