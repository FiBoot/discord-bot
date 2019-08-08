class Choice {
    /**
     * @param {string} text choice description
     * @param {number} goto page id to go to
     */
    constructor(text, goto) {
        Object.assign(this, { text, goto });
    }

    toString() {
        return `*${this.text}*`;
    }
}

module.exports = Choice;
