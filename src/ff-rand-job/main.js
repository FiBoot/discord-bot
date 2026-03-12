const { random } = require("../../utils");

function ffRandomJob(message, jobs) {
  const jobList = [
    "Paladin",
    "Guerrier",
    "Chevalier Noir",
    "Pistosabreur",

    "Mage Blanc",
    "Erudit",
    "Astromancien",
    "Sage",

    "Moine",
    "Chevalier Dragon",
    "Ninja",
    "Samuraï",
    "Faucheur",
    "Rodeur Vipère",

    "Barde",
    "Machiniste",
    "Danseur",

    "Invocateur",
    "Mage Rouge",
    "Mage Noir",
    "Pictomencien",
  ];

  const selectedJob = jobList[random(jobList.length)];

  return message.reply(`${selectedJob} !`);
}

module.exports = ffRandomJob;
