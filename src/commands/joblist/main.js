const { jobs } = require("../ff-rand-job/ff-jobs");

function rand(message) {
  const jobAbbrevPiped = jobs.map((job) => job.abbrev).join("|");
  return message.channel.send(jobAbbrevPiped);
}

module.exports = {
  data: {
    name: "joblist",
    exp: "joblist",
    usage: "joblist",
    description: "liste des jobs FF (abbrev eng)",
  },
  execute: rand,
};
