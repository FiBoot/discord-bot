require('dotenv').config();
const { logger, regexp } = require('../utils');
const { HeroBook, basic, images, bigText, random, nameGenerator, fetchImage } = require('../src');
const PREFIX = process.env.PREFIX ? process.env.PREFIX : '/';

const heroBook = new HeroBook();

/*
 * List of programs as:
 * [expression, callback]
 */
const programs = [
    ['help', basic.help],
    ['gif (.+)$', basic.giphy],
    ['noice', images.noice],
    ['fgm', images.fgm],
    ['right', images.right],
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
    if ((result = regexp('<@([0-9]+)>', message)) && result[0] === client.user.id) {
        return basic.mention(message);
    }
};
