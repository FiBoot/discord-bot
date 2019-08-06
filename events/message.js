const { logger } = require('../utils');

module.exports = (client, message) => {
    logger.debug(`message receive: ${message}`);
    if (message.content === '>ping') {
        message.reply('prout');
    }
};
