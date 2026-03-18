const fs = require("node:fs");
const path = require("node:path");

let loadedCommandsData = [];

function create() {
  const commandList = [];
  const foldersPath = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file === "main.js");
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      commandList.push(command);
      loadedCommandsData.push(command.data);
    }
  }
  return commandList;
}

function getData() {
  return loadedCommandsData;
}

module.exports = { create, getData };
