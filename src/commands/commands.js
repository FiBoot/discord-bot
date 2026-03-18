const { help, random, bigText, nameGenerator, ffRandomJob } = require("./index");

module.exports.commands = [
  { name: `help`, exp: `help`, cb: help },
  { name: `rand`, exp: `rand[ ]?([0-9]+)?`, cb: random },
  { name: `big [text]`, exp: `big (.+)`, cb: bigText },
  { name: `name`, exp: `name`, cb: nameGenerator },
  { name: `job`, exp: `job[ ]?([thmrc])?`, cb: ffRandomJob },
];
