const { logger, localeDate } = require('../../utils');
const { Player } = require('./player');
const map = require('./map');

class Game {
    constructor() {
        this.initialized = false;
        logger.info('TextRPG instancied');
    }

    initialization(author) {
        this.players = new Array();
        this.map = map;
        this.gameMaster = author;
        this.creationDate = new Date();
        this.initialized = true;
        logger.debug(`textRPG initalized by ${author.username}`);
        return 'initialized';
    }

    exec(command, author, arg) {
        const commands = {
            start: this.initialization.bind(this),
            join: this.addPlayer.bind(this),
            job: this.setPlayerJob.bind(this),
            info: this.gameInfo.bind(this),
            me: this.playerInfo.bind(this),
            map: this.mapInfo.bind(this)
        };
        return commands.hasOwnProperty(command) ? commands[command](author, arg) : `command '${command}' not found`;
    }

    getPlayer(author) {
        return this.players.find(p => p.id === author.id);
    }

    addPlayer(author) {
        if (!this.getPlayer(author)) {
            this.players.push(new Player(author));
        }
        return this.playerInfo(author);
    }

    setPlayerJob(author, job) {
        if (!job) {
            return 'no job specified';
        }
        const player = this.getPlayer(author);
        if (!player) {
            return `player ${author.username} not found`;
        }
        return player.setJob(job) ? player.toString() : 'job already set';
    }

    gameInfo() {
        return (
            `Game initalized on ${localeDate(this.creationDate)} by ${this.gameMaster.username}\n` +
            `players (${this.players.length}): ${this.players.map(p => p.name)}`
        );
    }

    playerInfo(author) {
        const player = this.getPlayer(author);
        return player ? player.toString() : `player ${author.username} not found`;
    }

    mapInfo(author) {
        // pos of player on map
        return `\n${this.map.map(l => `${l}\n`)}`;
    }
}

module.exports = { Game };
