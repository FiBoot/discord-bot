const bigAlphabet = require("./alphabet");

function bigText(message, text) {
  const letters = text
    .toLowerCase()
    .split("")
    .map((char) => (bigAlphabet.hasOwnProperty(char) ? bigAlphabet[char] : []));
  const big = bigAlphabet[" "]
    .map(
      (_, index) => "\n" + letters.map((letter) => (letter[index] ? letter[index] : null)).join(""),
    )
    .join("");
  return message.channel.send(big);
};


module.exports = {
  data: {
    name: "bigText",
    exp: "big ([ a-zA-Z0-9\!\?]+)?",
    usage: "big _[text]_",
    description: "Text en GRAND",
  },
  execute: bigText,
};
