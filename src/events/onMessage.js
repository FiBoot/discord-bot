const { prefix } = require("../../config.json");
const { logger, regexp, errorCheck } = require("../utils");
const { commands } = require("../commands/commands");

function parse(expression, { content }) {
  return regexp(`^\\${prefix}${expression}`, content);
}

module.exports = (message) => {
  logger.debug(`New message from ${message.author.username}: ${message.content}`);

  // ANTI-BACKDRAFT (cancel self message)
  if (message.author.bot) return;

  // COMMANDS
  let result;
  try {
    commands.forEach(({ exp, name, cb }) => {
      if ((result = parse(exp, message))) {
        logger.debug(`Command found: ${name}`);
        return cb(message, result[0]);
      }
    });
  } catch (e) {
    errorCheck(e);
  }

  // MENTION
  // if ((result = regexp("<@([0-9]+)>", message)) && result[0] === client.user.id) {
  //   return basic.mention(message);
  // }
};
