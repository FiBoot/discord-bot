const alphabet = require('./alphabet');

module.exports = (message, text) => {
    const letters = text
        .toLowerCase()
        .split('')
        .map(char => (alphabet.hasOwnProperty(char) ? alphabet[char] : []));
    const big = alphabet[' ']
        .map((_, index) => '\n' + letters.map(letter => (letter[index] ? letter[index] : null)).join(''))
        .join('');
    return message.channel.send(big);
};
