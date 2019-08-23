const https = require('https');
const { errorCheck } = require('../utils');

function request(url, encoding = null) {
    return new Promise((res, rej) => {
        https
            .get(url, response => {
                if (encoding) {
                    response.setEncoding(encoding);
                }
                let data = '';
                // A chunk of data has been recieved.
                response.on('data', chunk => (data += chunk));
                // The whole response has been received. Print out the result.
                response.on('end', () => res(data));
            })
            .on('error', error => errorCheck(error));
    });
}

module.exports = request;
