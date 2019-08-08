class Page {
    /**
     * @param {number} id page id
     * @param {string} text text shown
     * @param {Choice[]} choices list of choices
     */
    constructor(id, text, choices) {
        Object.assign(this, { id, text, choices });
    }

    toString() {
        const choices = this.choices.map((choice, index) => `__${index + 1}: ${choice.toString()}__\n`).join('');
        return `**${this.text}**\n${choices}`;
    }
}

module.exports = Page;
