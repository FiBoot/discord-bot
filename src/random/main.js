const { random } = require('../../utils');
const DEFAULT_MAX = 100;

module.exports = (message, result) => {
    const emojis = message.channel.guild.emojis.map(e => e);
    const randomEmoji = emojis[random(emojis.length)];
    const number = parseInt(result);
    const max = number > 1 ? number : DEFAULT_MAX;
    const rand = random(max) + 1;
    return `[${rand} / ${max}] ${randomEmoji ? `<:${randomEmoji.name}:${randomEmoji.id}>` : ''}`;
};
