require('dotenv').config();
require('colors');

const { localeDate } = require('../utils');

const MESSAGE_TYPES = {
    ERROR: 'ERROR'.red,
    INFO: 'INFO'.white,
    WARN: 'WARN'.yellow,
    DEBUG: 'DEBUG'.grey
};

/**
 * Log with datetime and given type
 *
 * @param {MESSAGE_TYPES} type
 * @param {string} message
 */
function log(type, message) {
    const datetime = localeDate(new Date());
    console.log(`[${datetime.grey}][${type}]: ${message}`);
    return `[${datetime.grey}][${type}]: ${message}`;
}

module.exports = {
    error: msg => log(MESSAGE_TYPES.ERROR, msg),
    info: msg => log(MESSAGE_TYPES.INFO, msg),
    warn: msg => log(MESSAGE_TYPES.WARN, msg),
    debug: msg => (process.env.DEBUG ? log(MESSAGE_TYPES.DEBUG, msg) : null)
};
