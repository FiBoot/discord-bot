require('dotenv').config();
const { logger, regexp } = require('../utils');
const { HeroBook, basic, bigText, random, nameGenerator, fetchImage } = require('../src');
const PREFIX = process.env.PREFIX ? process.env.PREFIX : '>';

const heroBook = new HeroBook();

/*
 * List of programs as:
 * [expression, callback]
 */
const programs = [
    ['gif (.+)$', basic.giphy],
    ['big[ ]+(.+)', bigText],
    ['rand[ ]*([0-9]+)?', random],
    ['name', nameGenerator],
    ['img', fetchImage],
    ['book[ ]*([0-9]{1})?', heroBook.exec.bind(heroBook)]
];

function cmd(expression, { content }) {
    return regexp(`^\\${PREFIX}${expression}`, content);
}

module.exports = (client, message) => {
    logger.debug(`message from ${message.author.username}: ${message.content}`);

    // ANTI-BACKDRAFT
    if (message.author.id === client.user.id) {
        return;
    }

    // PROGRAMS
    let result;
    programs.forEach(([exp, cb]) => {
        if ((result = cmd(exp, message))) {
            return cb(message, result[0]);
        }
    });

    // MENTION
    if (message.author.id !== client.user.id && regexp('<@([0-9]+)>', message)) {
        return basic.mention(message);
    }
};
