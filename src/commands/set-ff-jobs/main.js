const { fileHelper } = require("../../utils");
const { jobs } = require("../ff-rand-job/ff-jobs");

function setFFJobs(message, chosedJobs) {
  const jobAbbrevPiped = jobs.map((job) => job.abbrev).join("|");
  const jobsRegexp = new RegExp(jobAbbrevPiped, "g");

  const selectedJobs = (chosedJobs.match(jobsRegexp) ?? []).join("|");

  const filePath = `src/files/ff-jobs/${message.author.id}.data`;
  const fileData = fileHelper.writeFile(filePath, selectedJobs);

  return message.reply(`${fileData.replaceAll("|", " ")} **enregistré**`);
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
