const bigText = require("../big-text/main");
const ffRandJob = require("../ff-rand-job/main");
const help = require("../help/main");
const nameGenerator = require("../name-generator/main");
const random = require("../random/main");

describe("commands", () => {
  const message = {
    content: "test",
    author: { username: "name" },
    reply: (str) => {},
    channel: {
      send: (str) => {},
      sendTyping: () => {},
    },
  };

  describe("big-text", () => {
    it("should send on channel", () => {
      const spy = jest.spyOn(message.channel, "send");

      bigText.execute(message, "big");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("ff-rand-job", () => {
    it("should start typing", () => {
      const spy = jest.spyOn(message.channel, "sendTyping");

      ffRandJob.execute(message);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("help", () => {
    it("should reply with help message", () => {
      const spy = jest.spyOn(message, "reply");

      help.execute(message);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("name-generator", () => {
    it("should reply with generated name", () => {
      const spy = jest.spyOn(message, "reply");

      nameGenerator.execute(message);

      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/[a-z']+/));
    });
  });

  describe("random", () => {
    it("should reply with help message", () => {
      const spy = jest.spyOn(message, "reply");

      random.execute(message, 123);

      expect(spy).toHaveBeenCalledWith(expect.stringMatching(/\[\d+ \/ 123\]/));
    });
  });
});
