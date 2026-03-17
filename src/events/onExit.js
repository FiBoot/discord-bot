const { logger } = require("../utils");

module.exports = (process, client) => {
  logger.debug("Caught interrupt signal");
  client.user.setStatus("idle");
  process.exit();
};
