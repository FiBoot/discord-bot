require('dotenv').config();
require('colors');

const MESSAGE_TYPES = {
    ERROR: 'ERROR'.red,
    INFO: 'INFO'.white,
    WARN: 'WARN'.yellow,
    DEBUG: 'DEBUG'.grey
};

function log(type, message) {
    const date = new Date();
    const datetime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    console.log(`[${datetime.grey}][${type}]: ${message}`);
}

module.exports = {
    error: msg => log(MESSAGE_TYPES.ERROR, msg),
    info: msg => log(MESSAGE_TYPES.INFO, msg),
    warn: msg => log(MESSAGE_TYPES.WARN, msg),
    debug: msg => (process.env.DEBUG ? log(MESSAGE_TYPES.DEBUG, msg) : null)
};
