const PREFIX = process.env.PREFIX ? process.env.PREFIX : '/';

const helpMessage = `
> ${PREFIX}gif _search_
> ${PREFIX}noice | fgm | right
> ${PREFIX}big _text_
> ${PREFIX}rand _number_
> ${PREFIX}name
> ${PREFIX}img
`

module.exports = {
    giphy: message => message.channel.send(`https://giphy.com/explore/${result[0].replace(/ /g, '-')}`),
    help: message => message.channel.send(`<@${message.author.id}>${helpMessage}`),
    mention: message => message.channel.send(`Moi aussi je t\'aime <@${message.author.id}> <3`),
};
