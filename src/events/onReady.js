const { logger } = require("../utils");

module.exports = (client) => {
  client.user.setStatus("dnd");
  logger.info(`Logged as ${client.user.tag}`);
};
