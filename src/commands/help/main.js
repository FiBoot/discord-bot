const cmds = [
  '> /help\t\t\t\t\t\tListe des commandes',
  '> /rand [nombre]\t\tGénère un nombre aléatoire',
  '> /big [text]\t\t\t\tTexte en GRAND',
  '> /name\t\t\t\t\t\tGénèrateur de noms *(en test)*',
  '> /job [THMRC]\t\t\tJob FFXIV aléatoire (Tank, Heal, Melee, Range, Caster)',
];

module.exports = (message) => {
  message.reply(cmds.join("\n"));
};
