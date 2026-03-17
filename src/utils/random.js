/**
 * Genere a random number from 0 to max (excluded)
 *
 * @param {number} [max=1] max given (excluded)
 * @returns {number} random generated number
 */
function random(max = 1) {
    return Math.floor(Math.random() * max);
}

module.exports = random;
