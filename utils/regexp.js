module.exports = (expresion, string) => {
    const regexp = new RegExp(expresion);
    const result = regexp.exec(string);
    return result ? result.slice(1, result.length) : null;
};
