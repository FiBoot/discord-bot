require('dotenv').config();
require('colors');

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
    const date = new Date();
    const datetimeOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const datetime = `${date.toLocaleDateString('fr-Fr', datetimeOptions)} ${date.toLocaleTimeString()}`;
    console.log(`[${datetime.grey}][${type}]: ${message}`);
}

module.exports = {
    error: msg => log(MESSAGE_TYPES.ERROR, msg),
    info: msg => log(MESSAGE_TYPES.INFO, msg),
    warn: msg => log(MESSAGE_TYPES.WARN, msg),
    debug: msg => (process.env.DEBUG ? log(MESSAGE_TYPES.DEBUG, msg) : null)
};
