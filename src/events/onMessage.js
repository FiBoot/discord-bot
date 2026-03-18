const { prefix } = require("../../config.json");
const { logger, regexp, errorCheck } = require("../utils");
const { commandFactory } = require("../services");

const commands = commandFactory.create();

function parse(exp, { content }) {
  return regexp(`^\\${prefix}${exp}`, content);
}

function onMessage(message) {
  // ANTI-BACKDRAFT (cancel self message)
  if (message.author.bot) return;

  let result;
  for (command of commands) {
    if ((result = parse(command.data.exp, message))) {
      logger.debug(`Command found: ${command.data.name}`);
      try {
        return command.execute(message, result[0]);
      } catch (e) {
        errorCheck(e);
      }
    }
  }
}

module.exports = onMessage;
