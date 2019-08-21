const fs = require('fs');

const FS_OPTIONS = { encoding: 'utf8' };
const COMMAND_NAME = 'fb';
const DATA_FOLDER = '.data';
const KEY_SEPARATOR = ':';

class FileBase {
    static usage(prefix, commandName = COMMAND_NAME) {
        const header = `**__${commandName} usage__**: \n`;
        const usage = ['list', 'show [_`user`_]', 'set _`key`_ _`value`_', 'unset _`key`_']
            .map(cmd => `${prefix}${commandName} ${cmd}\n`)
            .join('');
        return `${header}${usage}`;
    }

    static exec(message, [action, key, data]) {
        return {
            list: this.list.bind(this),
            show: this.show.bind(this),
            set: this.set.bind(this),
            unset: this.unset.bind(this)
        }[action](message, key, data);
    }

    static getDataList() {
        return fs.readdirSync(DATA_FOLDER);
    }

    static getFileContent(file) {
        const path = `${DATA_FOLDER}/${file}`;
        if (!fs.existsSync(path)) {
            fs.openSync(path, 'a');
        }
        return fs.readFileSync(path, FS_OPTIONS);
    }

    static writeFile(message, content) {
        const path = `${DATA_FOLDER}/${message.author.username}`;
        return fs.writeFileSync(path, content, FS_OPTIONS);
    }

    static list() {
        return `\n${this.getDataList()
            .map(file => `- _${file}_\n`)
            .join('')}`;
    }

    static show(message, user) {
        const file = user && this.getDataList().includes(user) ? user : message.author.username;
        const content = this.getFileContent(file);
        return `__${file}__\n${content
            .split('\n')
            .map(line => {
                const separatorIndex = line.indexOf(KEY_SEPARATOR) + 1;
                return `${line.slice(0, separatorIndex)}\t${line.slice(separatorIndex, line.length)}`;
            })
            .join('\n')}`;
    }

    static set(message, key, data) {
        if (key && data) {
            const content = this.getFileContent(message.author.username);
            const expression = new RegExp(`${key}${KEY_SEPARATOR}.+\\n`, 'm');
            this.writeFile(
                message,
                expression.test(content)
                    ? content.replace(expression, `${key}:${data}\n`)
                    : content + `${key}:${data}\n`
            );
        }
        return this.show(message);
    }

    static unset(message, key) {
        if (key) {
            const content = this.getFileContent(message.author.username);
            this.writeFile(message, content.replace(new RegExp(`${key}${KEY_SEPARATOR}.+\\n`, 'm'), ``));
        }
        return this.show(message);
    }
}

module.exports = FileBase;
