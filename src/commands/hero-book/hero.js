class Hero {
    /**
     * @param {Author} author discord author
     */
    constructor({ id, username }) {
        Object.assign(this, { id, name: username, page: 1 });
    }
}

module.exports = Hero;
