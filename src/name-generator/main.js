const { random } = require('../../utils');

function aName() {
    const aNames = [
        'Bilal',
        'Achmed',
        'Mohamed',
        'Khaled',
        'Abdoul',
        'Aziz'
    ];
    return aNames[random(aNames.length)]
}

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
        'z',
        "'"
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

function nameGenerator(message) {
    // SPECIAL BAMBOUZLING MALA mais pas trop en fait
    if (message.author.username === 'Mala' && !random(5)) {
        return message.reply(aName());
    }

    let name = '';
    for (let i = random(3) + 1; i > 0; i--) {
        name += syllable();
    }
    name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
    return message.reply(name);
}

module.exports = nameGenerator;
