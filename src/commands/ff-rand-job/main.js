const { random } = require("../../utils");
const { jobs } = require("./ff-jobs");

const TYPPING_TIMEOUT = 1000;
const jobCategories = ["t", "h", "m", "r", "c"];
const jobColors = [0x183db8, 0x32a852, 0xc41108, 0xc7551c, 0xbd1ca2];

function findJob(category) {
  if (category) {
    const index = jobCategories.findIndex((jc) => category === jc);
    if (index > -1) {
      const filteredJobs = jobs.filter((j) => j.type === index);
      return filteredJobs[random(filteredJobs.length)];
    }
  }
  return jobs[random(jobs.length)];
}

function ffRandomJob(message, category) {
  const selectedJob = findJob(category);
  const embed = {
    color: jobColors[selectedJob.type],
    // author: {
    //   name: selectedJob.name,
    //   icon_url: selectedJob.icon,
    // },
    title: `${selectedJob.name} !`,
    // description: selectedJob.name,
    thumbnail: { url: selectedJob.iconUrl },
  };
  setTimeout(() => message.channel.send({ embeds: [embed] }), TYPPING_TIMEOUT);
  return message.channel.sendTyping();
}

module.exports = {
  data: {
    name: "ffRandomJob",
    exp: "job[ ]?([thmrc])?",
    usage: "job [THMRC]",
    description: "Job FFXIV aléatoire (Tank, Heal, Melee, Range, Caster)",
  },
  execute: ffRandomJob,
};
