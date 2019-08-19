/**
 * exec regex on given string and return results without full match
 *
 * @param {regexp} expresion
 * @param {string} string
 * @returns {string[]} all results (except full match)
 */
function regexp(expresion, string) {
    const regexp = new RegExp(expresion);
    const result = regexp.exec(string);
    return result ? result.slice(1, result.length) : null;
}

module.exports = regexp;
