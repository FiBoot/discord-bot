const { logger } = require('../utils');

module.exports = (client, message) => {
    logger.debug(`message receive: ${message}`);
    if (message.content === '>ping') {
        message.reply('prout');
    }
    if (message.content === '>uef') {
        message.reply('https://giphy.com/explore/dog/')
    }
};
