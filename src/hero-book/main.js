const fs = require('fs');
const path = require('path');
const { logger, errorCheck } = require('../../utils');
const { Page, Choice, Hero } = require('.');

const story = 'kappu.json';

class HeroBook {
    constructor() {
        this.initialized = false;
        this.heroes = [];
        fs.readFile(path.join(__dirname, 'stories/', story), 'utf8', (error, data) =>
            errorCheck(error, data).then(data => {
                this.pages = this.generePages(JSON.parse(data));
                this.initialized = true;
                logger.info('HeroBook initalized');
            })
        );
    }

    generePages(story) {
        return story.map(
            ({ id, text, choices }) =>
                new Page(id, text, choices ? choices.map(({ text, goto }) => new Choice(text, goto)) : [])
        );
    }

    exec(message, choice) {
        if (!this.initialized) {
            return 'HeroBook not initalized';
        }
        // RESET
        if (choice === '0') {
            return message.reply(this.addHero(message.author));
        }
        const hero = this.getHero(message.author);
        const ret = hero ? (choice ? this.choice(hero, choice) : this.status(hero)) : this.addHero(message.author);
        return message.reply(ret);
    }

    getHero(author) {
        return this.heroes.find(h => h.id === author.id);
    }

    removeHero(author) {
        const hero = this.getHero(author);
        if (hero) {
            this.heroes.splice(this.heroes.indexOf(hero), 1);
        }
    }

    addHero(author) {
        if (this.getHero(author)) {
            this.removeHero(author);
        }
        const hero = new Hero(author);
        this.heroes.push(hero);
        return this.status(hero);
    }

    status(hero) {
        return this.pages[hero.page - 1].toString();
    }

    choice(hero, choice) {
        const page = this.pages[hero.page - 1];
        if (choice > page.choices.length) {
            return `choice #${choice} does not exist`;
        }
        hero.page = page.choices[choice - 1].goto;
        return this.status(hero);
    }
}

module.exports = HeroBook;
