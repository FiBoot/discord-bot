class Job {
    constructor(stats) {
        Object.assign(this, stats);
    }
    toString() {
        return `**job**: ${this.name}\n**HP**: ${this.hp}\n**MP**: ${this.mp}`;
    }
}

class Warrior extends Job {
    constructor() {
        super({ name: 'warrior', hp: 100, mp: 20 });
    }
    special() {
        return 'tourbilol!';
    }
}

class Mage extends Job {
    constructor() {
        super({ name: 'mage', hp: 40, mp: 200 });
    }
    special() {
        return 'ingdignation!';
    }
}

class Ranger extends Job {
    constructor() {
        super({ name: 'ranger', hp: 60, mp: 60 });
    }
    special() {
        return 'piou piou';
    }
}

module.exports = { Warrior, Mage, Ranger };
