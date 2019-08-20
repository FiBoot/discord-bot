require('dotenv').config();

const { logger, regexp } = require('../utils');
const { HeroBook, bigText, random, nameGenerator } = require('../src');
const PREFIX = process.env.PREFIX ? process.env.PREFIX : '>';
const MAX_DELETE_MESSAGE = 10;

const heroBook = new HeroBook();

function cmd(expression, message) {
    return regexp(`^\\${PREFIX}${expression}`, message);
}

module.exports = (client, message) => {
    logger.debug(`message from ${message.author.username}: ${message.content}`);

    let result;

    // MENTION
    if ((result = regexp('<@([0-9]+)>', message.content)) && result[0] === `${client.user.id}`) {
        return message.channel.send(`Moi aussi je t\'aime <@${message.author.id}> <3`);
    }

    // MESSAGE DONT START WITH BOT PREFIX COMMAND -> EXIT
    if (!cmd('', message.content)) {
        return;
    }

    // PING
    if (cmd('ping', message.content)) {
        return message.reply('prout');
    }
    
    // CLEAN /!\
    // if ((result = cmd('clean[ ]*([0-9]+)?', message.content))) {
    //     const number = parseInt(result[0]);
    //     const option = { limit: number < MAX_DELETE_MESSAGE ? number : MAX_DELETE_MESSAGE };
    //     return message.channel.fetchMessages(option).then(messages => message.channel.bulkDelete(messages));
    // }

    // GIPHY
    if ((result = cmd('gif (.+)$', message.content))) {
        return message.channel.send(`https://giphy.com/explore/${result[0].replace(/ /g, '-')}`);
    }

    // KAPU
    if ((result = cmd('ckikonbez', message.content))) {
        return message.reply(`les roux ne sont pas de vrais êtres humains`);
    }

    // HERO BOOK
    if ((result = cmd('book[ ]*([0-9]{1})?', message.content))) {
        return message.reply(heroBook.exec(message, result[0]));
    }

    // BIG TEXT
    if ((result = cmd('big[ ]+(.+)', message.content))) {
        return message.channel.send(bigText(result[0]));
    }

    // RAND
    if ((result = cmd('rand[ ]*([0-9]+)?', message.content))) {
        return message.reply(random(message, result[0]));
    }

    // NAME GENERATOR
    if ((result = cmd('name', message.content))) {
        return message.reply(nameGenerator());
    }
};
