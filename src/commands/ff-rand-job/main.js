const { random, logger, fileHelper } = require("../../utils");
const { jobs } = require("./ff-jobs");

const TYPPING_TIMEOUT = 200;
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

function checkSavedFile({ author }) {
  const filePath = `src/files/ff-jobs/${author.id}.data`;
  const fileData = fileHelper.readFile(filePath);
  return fileData;
}

function findJobFromList(jobStr) {
  const jobList = jobStr.split("|");
  const jobAbbrev = jobList[random(jobList.length)];
  const selectedJob = jobs.find((job) => job.abbrev === jobAbbrev);
  return selectedJob;
}

function ffRandomJob(message, category) {
  const fileData = checkSavedFile(message);
  const selectedJob = fileData ? findJobFromList(fileData) : findJob(category);

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
  logger.debug(selectedJob.name);
  setTimeout(() => message.channel.send({ embeds: [embed] }), TYPPING_TIMEOUT);
  // setTimeout(() => message.channel.send("ça suffit maintenant!"), TYPPING_TIMEOUT);
  return message.channel.sendTyping();
}

module.exports = {
  data: {
    name: "ffRandomJob",
    exp: "job[ ]?([thmrc]+)?",
    usage: "job _[thmrc]_",
    description: "Job FFXIV aléatoire (Tank, Heal, Melee, Range, Caster)",
  },
  execute: ffRandomJob,
};
