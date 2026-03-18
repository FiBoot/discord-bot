const { random } = require("../../utils");
const DEFAULT_MAX = 100;

function rand(message, n) {
  const number = parseInt(n);
  const max = number > 1 ? number : DEFAULT_MAX;
  const rand = random(max) + 1;
  return message.reply(`[${rand} / ${max}]`);
}

module.exports = {
  data: {
    name: "rand",
    exp: "rand[ ]?(\d+)?",
    usage: "rand [nombre]",
    description: "dès",
  },
  execute: rand,
};
