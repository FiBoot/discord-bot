class Choice {
    /**
     * @param {string} text choice description
     * @param {number} next page id to go to
     */
    constructor(text, next) {
        Object.assign(this, { text, next });
    }

    toString() {
        return `*${this.text}*`;
    }
}

module.exports = Choice;
