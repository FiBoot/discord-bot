function localeDate(date) {
    return `${date.toLocaleDateString('fr-Fr', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })} ${date.toLocaleTimeString()}`;
}

module.exports = localeDate;
