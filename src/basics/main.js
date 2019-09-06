module.exports = {
    mention: message => message.channel.send(`Moi aussi je t\'aime <@${message.author.id}> <3`),
    giphy: message => message.channel.send(`https://giphy.com/explore/${result[0].replace(/ /g, '-')}`)
};
