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
    if (!fs.existsSync(filePath)) {
      console.log('file no exist no shit')
    }
    try {
      fs.writeFileSync(filePath, data, this.encoding);
    } catch (err) {
      logger.error(err);
    }
  }
}

module.exports = FileHelper;
