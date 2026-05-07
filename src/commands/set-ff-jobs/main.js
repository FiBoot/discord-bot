const { random, regexp } = require("../../utils");
const { jobs } = require("../ff-rand-job/ff-jobs");

const DEFAULT_MAX = 100;

function set(jobs) {
  const jobAbbrPiped = jobs.map((job) => job.abbr).join('|');
  console.log(jobAbbrPiped)
  const job = regexp()
  return message.reply(`[${rand} / ${max}]`);
}

module.exports = {
  data: {
    name: "setFFJobs",
    exp: "set jobs (.+)",
    usage: "set jobs _[données]_",
    description: "enregistre les jobs ff",
  },
  execute: set,
};
