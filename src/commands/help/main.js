const { commandFactory } = require("../../services");
const { prefix } = require("../../../config.json");

const MAX_GAP_LENGTH = 25;
const MIN_GAP_LENGTH = 4;

function help(message) {
  const loadedCommandsData = commandFactory.getData();
  const cmds = loadedCommandsData.map((data) => {
    const gap = MAX_GAP_LENGTH - data.usage.length;
    return `>${prefix}${data.usage}${" ".repeat(gap > 0 ? gap : MIN_GAP_LENGTH)}${data.description}`;
  });
  message.reply(cmds.join("\n"));
}

module.exports = {
  data: {
    name: "help",
    exp: "help",
    usage: "help",
    description: "List des commandes",
  },
  execute: help,
};
