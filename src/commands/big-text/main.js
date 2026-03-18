const alphabet = require("./alphabet");

function bigText(message, text) {
  const letters = text
    .toLowerCase()
    .split("")
    .map((char) => (alphabet.hasOwnProperty(char) ? alphabet[char] : []));
  const big = alphabet[" "]
    .map(
      (_, index) => "\n" + letters.map((letter) => (letter[index] ? letter[index] : null)).join(""),
    )
    .join("");
  return message.channel.send(big);
};


module.exports = {
  data: {
    name: "bigText",
    exp: "big ([ a-z0-9\!\?]+)?",
    usage: "big [text]",
    description: "Text en GRAND",
  },
  execute: bigText,
};
