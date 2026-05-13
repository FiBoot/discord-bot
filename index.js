const process = require("node:process");

const { Client, Events } = require("discord.js");
const { token } = require("./config.json");
const { onMessage, onReady, onExit } = require("./src/events");
const { errorCheck, logger, regexp } = require("./src/utils");


const setFFJobs = require("./src/commands/set-ff-jobs/main");


setFFJobs.execute('PLD,WAR,WHM,TRU,PCT')


// //  CLIENT
// const client = new Client({
//   intents: ["Guilds", "GuildMessages", "MessageContent"],
// });

// // // EVENTS
// process.on("SIGINT", () => onExit(process, client));
// client.on(Events.ClientReady, onReady);
// client.on(Events.MessageCreate, onMessage);

// // // START
// client.login(token).catch((e) => errorCheck(e));
