const { logger } = require('../utils');

module.exports = client => {
    logger.debug(`Logged in as ${client.user.tag}`);
};
