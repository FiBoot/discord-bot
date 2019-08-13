const alphabet = require('./alphabet');

module.exports = text => {
    const letters = text.split('').map(char => (alphabet.hasOwnProperty(char) ? alphabet[char] : []));
    return alphabet[' ']
        .map((_, index) => '\n' + letters.map(letter => (letter[index] ? letter[index] : null)).join(''))
        .join('');
};
