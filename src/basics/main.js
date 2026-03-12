const PREFIX = process.env.PREFIX ? process.env.PREFIX : "/";

const cmds = [
  "gif _search_",
  "big _text_",
  "rand _(number)_",
  "name",
  "job _(jobs)_",
  //'img',
];

const helpMessage = cmds.map((m) => `> ${PREFIX}${m}\n`);

module.exports = {
  giphy: (message) => message.channel.send(`https://giphy.com/explore/${result[0].replace(/ /g, "-")}`),
  help: (message) => message.channel.send(`<@${message.author.id}>${helpMessage}`),
  mention: (message) => message.channel.send(`Moi aussi je t\'aime <@${message.author.id}> <3`),
};
