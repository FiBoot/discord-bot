const { errorCheck, localeDate, logger, random, regexp } = require("../");

describe("utils", () => {
  describe("error-check", () => {
    const args = [1, 2];

    it("should resolve when no error", () => {
      return errorCheck(null, args).then((arg) => {
        expect(arg).toEqual(args);
      });
    });

    it("should log when error", () => {
      const error = {
        message: "test-error-message",
        stack: ["test-error-stack1", "test-error-stack2"],
      };
      jest.spyOn(logger, "error");
      jest.spyOn(logger, "debug");

      errorCheck(error, args);
      expect(logger.error).toHaveBeenCalledWith(error.message);
      expect(logger.debug).toHaveBeenCalledWith(error.stack);
    });
  });

  describe("locale-date", () => {
    it("should return locale date", () => {
      const result = localeDate(new Date("December 17, 1995 03:24:00"));
      expect(result).toEqual("17/12/1995 03:24:00");
    });
  });

  describe("logger", () => {
    beforeEach(() => {
      jest.spyOn(console, "log");
    });

    it("should log for each type", () => {
      const message = "test";

      logger.info(message);
      logger.warn(message);
      logger.error(message);
      logger.debug(message);
      expect(console.log).toHaveBeenCalledTimes(4);
    });
  });

  describe("regexp", () => {
    it("should return first occurence", () => {
      const result = regexp("^([abc]+)d$", "abccbcd");
      expect(result).toEqual(["abccbc"]);
    });

    it("should return null when no match", () => {
      const result = regexp("^([abc]+)d$", "zxcvsddvxcz");
      expect(result).toEqual(null);
    });

    it("should return multiple match", () => {
      const result = regexp("^([abc]+) ([0-9]+) (test)$", "abcbca 127886 test");
      expect(result).toEqual(["abcbca", "127886", "test"]);
    });
  });

  describe("random", () => {
    it("should genere a random number", () => {
      for (let i = 0; i < 1000; i++) {
        const result = random(100);
        expect(result).toBeLessThan(100);
        expect(result).toBeGreaterThanOrEqual(0);
      }
    });
  });
});
