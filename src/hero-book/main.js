const { logger } = require('../../utils');
const { Page, Choice, Hero } = require('.');

class HeroBook {
    constructor() {
        this.pages = [
            new Page(1, 'Tu rentres dans un bar', [
                new Choice('Tu vas vers Kappu', 2),
                new Choice('tu demande du lait au barman', 3)
            ]),
            new Page(2, "__Kappu__: Salut t'as les seins chaud?", [
                new Choice('Oui', 4),
                new Choice('VADE RETRO GINGEROO', 5)
            ]),
            new Page(3, "t'a cru qu'on servait les cucks ici ?", []),
            new Page(4, "__Kappu__: tu veux qu' on baise?", []),
            new Page(5, '__Kappu__: MOI CQUE JVEUX CEST FAIRE LAMOUR!', [])
        ];
        this.heroes = [];
        logger.info('HeroBook instancied');
    }

    exec(author, choice) {
        // RESET
        if (choice === '0') {
            return this.addAuthor(author);
        }
        const hero = this.getHero(author);
        return hero ? (choice ? this.choice(hero, choice) : this.status(hero)) : this.addAuthor(author);
    }

    getHero(author) {
        return this.heroes.find(h => h.id === author.id);
    }

    removeAuthor(author) {
        const hero = this.getHero(author);
        if (hero) {
            this.heroes.splice(this.heroes.indexOf(hero), 1);
        }
    }

    addAuthor(author) {
        if (this.getHero(author)) {
            this.removeAuthor(author);
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
        hero.page = page.choices[choice - 1].next;
        return this.status(hero);
    }
}

module.exports = HeroBook;
