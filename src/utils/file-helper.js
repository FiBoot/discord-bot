const fs = require("node:fs");
const logger = require("./logger");

class FileHelper {
  static encoding = "utf8";

  static readFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, this.encoding);
      return data;
    } catch (err) {
      logger.error(err);
      return null;
    }
  }

  static writeFile(filePath, data) {
    try {
      fs.writeFileSync(filePath, data, this.encoding);
      return data;
    } catch (err) {
      logger.error(err);
      return null;
    }
  }
}

module.exports = FileHelper;
