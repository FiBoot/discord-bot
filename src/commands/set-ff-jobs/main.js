const { fileHelper } = require("../../utils");
const { jobs } = require("../ff-rand-job/ff-jobs");

function setFFJobs(inputJobs) {
  const jobAbbrPiped = jobs.map((job) => job.abbr).join("|");
  const jobsRegexp = new RegExp(jobAbbrPiped, "g");
  const selectedJobs = inputJobs.match(jobsRegexp).join("|");
  fileHelper.writeFile("src/files/ff-jobs/user-id.data", selectedJobs);
}

module.exports = {
  data: {
    name: "setFFJobs",
    exp: "set jobs (.+)",
    usage: "set jobs _[données]_",
    description: "enregistre les jobs ff",
  },
  execute: setFFJobs,
};
