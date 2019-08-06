const logger = require('./logger');

/**
 * Check and log given error, or resolve with given parameters
 *
 * @param {Error} error
 * @param {any} args
 * @returns {Promise}
 */
function errorCheck(error, args) {
    return new Promise((resolve, reject) => {
        if (error) {
            logger.error(error.message);
            logger.debug(error.stack);
            return;
        }
        resolve(args);
    });
}

module.exports = errorCheck;
