const { logger } = require('../utils');

module.exports = client => {
    logger.info(`Logged in as ${client.user.tag}`);
};
