const { Warrior, Mage, Ranger } = require('./jobs');

const JOBS_FACTORY = {
    warrior: () => new Warrior(),
    mage: () => new Mage(),
    ranger: () => new Ranger()
};
const JOBS = Object.keys(JOBS_FACTORY);

function jobFactory(job) {
    return JOBS_FACTORY.hasOwnProperty(job) ? JOBS_FACTORY[job]() : null;
}

module.exports = { jobFactory, JOBS };
