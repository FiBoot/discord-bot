require('dotenv').config();

const { logger, regexp } = require('../utils');
const { Game } = require('../src/text-rpg/game');
const PREFIX = process.env.PREFIX ? process.env.PREFIX : '>';

const textRPG = new Game();

module.exports = (client, message) => {
    logger.info(`message from ${message.author.username}: ${message.content}`);

    if (
        // MESSAGE DONT START WITH BOT PREFIX COMMAND -> EXIT
        !regexp(`^${PREFIX}`, message.content)
    ) {
        return;
    }

    let result;
    // PING
    if (regexp(`^\\${PREFIX}ping$`, message.content)) {
        return message.reply('prout');
    }
    // GIPHY
    if ((result = regexp(`^\\${PREFIX}gif (.+)$`, message.content))) {
        return message.reply(`https://giphy.com/explore/${result[0].replace(/ /g, '-')}`);
    }
    // KAPU
    if ((result = regexp(`^\\${PREFIX}ckikonbez$`, message.content))) {
        return message.reply(`les roux ne sont pas de vrais êtres humains`);
    }
    // TEXT RPG
    if ((result = regexp(`^\\${PREFIX}t[ ]+([a-zA-Z0-9_]+)[ ]*([a-zA-Z0-9_]+)?`, message.content))) {
        if (!textRPG.initialized) {
            textRPG.initialization(message.author);
        }
        return message.reply(textRPG.exec(result[0], message.author, result[1]));
    }
};
