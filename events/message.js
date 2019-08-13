require('dotenv').config();

const { logger, regexp } = require('../utils');
const { TextRPG, HeroBook, bigText } = require('../src');
const PREFIX = process.env.PREFIX ? process.env.PREFIX : '>';

// const textRPG = new TextRPG();
const heroBook = new HeroBook();

function cmd(expression, message) {
    return regexp(`^\\${PREFIX}${expression}`, message);
}

module.exports = (client, message) => {
    logger.debug(`message from ${message.author.username}: ${message.content}`);

    // MESSAGE DONT START WITH BOT PREFIX COMMAND -> EXIT
    if (!cmd('', message.content)) {
        return;
    }

    let result;

    // PING
    if (cmd('ping', message.content)) {
        return message.reply('prout');
    }

    // GIPHY
    if ((result = cmd('gif (.+)$', message.content))) {
        return message.reply(`https://giphy.com/explore/${result[0].replace(/ /g, '-')}`);
    }

    // KAPU
    if ((result = cmd('ckikonbez', message.content))) {
        return message.reply(`les roux ne sont pas de vrais êtres humains`);
    }

    // TEXT RPG
    // if ((result = cmd('t[ ]+([a-zA-Z0-9_]+)[ ]*([a-zA-Z0-9_]+)?', message.content))) {
    //     if (!textRPG.initialized) {
    //         textRPG.initialization(message.author);
    //     }
    //     return message.reply(textRPG.exec(result[0], message.author, result[1]));
    // }

    // HERO BOOK
    if ((result = cmd('book[ ]*([0-9]{1})?', message.content))) {
        return message.reply(heroBook.exec(message.author, result[0]));
    }

    // BIG TEXT
    if ((result = cmd('big[ ]+(.+)', message.content))) {
        const text = bigText(result[0]);
        return text ? message.reply(text) : null;
    }
};
