const { jobFactory, JOBS } = require('./job-factory');

class Player {
    constructor(author) {
        Object.assign(this, { id: author.id, name: author.username });
        this.job = null;
    }

    setJob(job) {
        if (!JOBS.includes(job)) {
            return `job '${job}' not found\npossible jobs: \n${JOBS.map(j => `- ${j}\n`).join('')}`;
        }
        if (this.job) {
            return `already ${this.job.name}`;
        }
        this.job = jobFactory(job);
        return `player ${this.name} is now ${job}`;
    }

    special() {
        return this.job ? this.job.special() : 'no special, set a job first';
    }

    toString() {
        return `__Sheet__:\n**name**: ${this.name}${this.job ? `\n${this.job.toString()}` : ''}`;
    }
}

module.exports = { Player };
