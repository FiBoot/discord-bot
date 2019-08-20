const { random } = require('../../utils');

function consonant() {
    const consonants = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'v',
        'w',
        'x',
        'z'
    ];
    return consonants[random(consonants.length)];
}

function vowel() {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    return vowels[random(vowels.length)];
}

function syllable() {
    let syllable = '';
    for (let i = random(3) + 2; i > 0; i--) {
        syllable += random(2) ? consonant() : vowel();
    }
    return syllable;
}

function nameGenerator() {
    let name = '';
    for (let i = random(3) + 1; i > 0; i--) {
        name += syllable();
    }
    return name;
}

module.exports = nameGenerator;
