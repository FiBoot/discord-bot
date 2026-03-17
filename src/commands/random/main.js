const { random } = require('../../utils');
const DEFAULT_MAX = 100;

module.exports = (message, n) => {
    const number = parseInt(n);
    const max = number > 1 ? number : DEFAULT_MAX;
    const rand = random(max) + 1;
    return message.reply(`[${rand} / ${max}]`);
};
