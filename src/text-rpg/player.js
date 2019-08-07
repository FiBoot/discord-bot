const { logger } = require('../../utils');

const JOBS = {
    WARRIOR: 'warrior',
    RANGER: 'ranger',
    PRIEST: 'priest',
    MAGE: 'mage',
    ROGUE: 'rogue'
};

class Player {
    constructor({ id, username }) {
        this.id = id;
        this.name = username;
        this.job = null;
    }

    setJob(job) {
        if (this.job) {
            return false;
        }
        this.job = job;
        return true
    }

    toString() {
        return `${this.name} (${this.id})\njob: ${this.job ? this.job : '/'}`;
    }
}

module.exports = { Player, JOBS };
