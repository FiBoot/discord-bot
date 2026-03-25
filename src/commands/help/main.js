const { commandFactory } = require("../../services");
const { prefix } = require("../../../config.json");

const MAX_GAP_LENGTH = 10;
const MIN_GAP_LENGTH = 2;

function help(message) {
  const loadedCommandsData = commandFactory.getData();
  const cmds = loadedCommandsData.map((data) => {
    const gap = MAX_GAP_LENGTH - Math.ceil(data.usage / 2);
    return `>${prefix}${data.usage}${"\t".repeat(gap > 0 ? gap : MIN_GAP_LENGTH)}${data.description}`;
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
