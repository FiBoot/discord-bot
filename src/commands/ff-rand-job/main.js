const { random } = require("../../utils");
const TYPPING_TIMEOUT = 1000;

const jobCategories = ["T", "H", "M", "R", "C"];
const jobs = [
  ["Paladin", "Guerrier", "Chevalier Noir", "Pistosabreur"],
  ["Mage Blanc", "Erudit", "Astromancien", "Sage"],
  ["Moine", "Chevalier Dragon", "Ninja", "Samurai", "Faucheur", "Rodeur Vipere"],
  ["Barde", "Machiniste", "Danseur"],
  ["Invocateur", "Mage Rouge", "Mage Noir", "Pictomancien"],
];

function findJob(category) {
  if (category) {
    const index = jobCategories.findIndex((jc) => category === jc);
    if (index > -1) {
      console.log(jobs[index]);
      return jobs[index][random(jobs[index].length)];
    }
  }
  const allJobs = [];
  jobs.forEach((jobCategory) => jobCategory.forEach((job) => allJobs.push(job)));
  return allJobs[random(allJobs.length)];
}

function ffRandomJob(message, category) {
  const selectedJob = findJob(category);
  setTimeout(() => message.reply(`${selectedJob} !`), TYPPING_TIMEOUT);
  // message.reply({
  //   body: `${selectedJob} !`,
  //   files: [`src/assets/ff14-job-icons/${selectedJob}.png`],
  // });
  return message.channel.sendTyping();
}

module.exports = ffRandomJob;
