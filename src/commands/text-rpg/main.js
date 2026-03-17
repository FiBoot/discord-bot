const { logger, localeDate } = require('../../utils');
const { Player } = require('./player');
const map = require('./map');

class TextRPG {
    constructor() {
        this.initialized = false;
        this.commands = {
            help: this.tutorial.bind(this),
            start: this.initialization.bind(this),
            info: this.gameInfo.bind(this),
            map: this.mapInfo.bind(this),
            me: this.playerInfo.bind(this),
            join: this.addPlayer.bind(this),
            leave: this.removePlayer.bind(this),
            job: this.setPlayerJob.bind(this),
            special: this.special.bind(this)
        };
        logger.info('TextRPG initalized');
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
        return this.commands.hasOwnProperty(command)
            ? this.commands[command](author, arg)
            : `command '${command}' not found`;
    }

    tutorial() {
        return `__Commands__:\n${Object.keys(this.commands).join('\n')}`;
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

    removePlayer(author) {
        const player = this.getPlayer(author);
        if (!player) {
            return `player ${author.username} not found`;
        }
        this.players.splice(this.players.indexOf(player), 1);
        return `cya ${author.username}`;
    }

    setPlayerJob(author, job) {
        if (!job) {
            return 'no job specified';
        }
        const player = this.getPlayer(author);
        if (!player) {
            return `player ${author.username} not found`;
        }
        return player.setJob(job);
    }

    special(author) {
        const player = this.getPlayer(author);
        if (!player) {
            return `player ${author.username} not found`;
        }
        return player.special();
    }

    gameInfo() {
        return `__Game info__:\n**date**: ${localeDate(this.creationDate)}\n**master**: ${
            this.gameMaster.username
        }\n**players** (${this.players.length}): ${this.players.map(p => p.name)}`;
    }

    playerInfo(author) {
        const player = this.getPlayer(author);
        return player ? player.toString() : `player ${author.username} not found`;
    }

    mapInfo(author) {
        // pos of player on map
        return `__Map__:\n${this.map
            .map(l => `${l}\n`)
            .join('')
            .replace(/ /g, '   ')}`;
    }
}

module.exports = TextRPG;
