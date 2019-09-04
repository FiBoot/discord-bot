require('dotenv').config();
const { logger, regexp } = require('../utils');
const { HeroBook, bigText, random, nameGenerator, fetchImage } = require('../src');
const PREFIX = process.env.PREFIX ? process.env.PREFIX : '>';

const heroBook = new HeroBook();

function cmd(expression, { content }) {
    return regexp(`^\\${PREFIX}${expression}`, content);
}

module.exports = (client, message) => {
    logger.debug(`message from ${message.author.username}: ${message.content}`);

    let result;

    // MENTION
    if ((result = regexp('<@([0-9]+)>', message)) && result[0] === `${client.user.id}`) {
        return message.channel.send(`Moi aussi je t\'aime <@${message.author.id}> <3`);
    }

    // RANDOM FIRESTORE IMAGE
    if (cmd('img', message)) {
        return fetchImage(message);
    }

    // PING
    if (cmd('ping', message)) {
        return message.reply('prout');
    }

    // GIPHY
    if ((result = cmd('gif (.+)$', message))) {
        return message.channel.send(`https://giphy.com/explore/${result[0].replace(/ /g, '-')}`);
    }

    // HERO BOOK
    if ((result = cmd('book[ ]*([0-9]{1})?', message))) {
        return message.reply(heroBook.exec(message, result[0]));
    }

    // BIG TEXT
    if ((result = cmd('big[ ]+(.+)', message))) {
        return message.channel.send(bigText(result[0]));
    }

    // RAND
    if ((result = cmd('rand[ ]*([0-9]+)?', message))) {
        return message.reply(random(message, result[0]));
    }

    // NAME GENERATOR
    if ((result = cmd('name', message))) {
        return message.reply(nameGenerator());
    }
};
