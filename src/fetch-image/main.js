const fs = require('fs');
const { errorCheck, random, request } = require('../../utils');
const TMP_FOLDER = '.tmp';
const TMP_FILE = 'tmp';

function createTMPImage(data, extention = 'png') {
    if (!fs.existsSync(TMP_FOLDER)) {
        fs.mkdirSync(TMP_FOLDER);
    }
    const path = `${TMP_FOLDER}/${TMP_FILE}.${extention}`;
    fs.writeFileSync(path, data, 'binary', error => errorCheck(error));
    return path;
}

function cleanTMPImage(extention = 'png') {
    fs.unlinkSync(`${TMP_FOLDER}/${TMP_FILE}.${extention}`, error => errorCheck(error));
}

function fetchImage(message) {
    // TODO connect to firebase en get random image
    // can be a service on letakol
    const saddly_hard_coded_images = [
        'https://firebasestorage.googleapis.com/v0/b/letakol-62166.appspot.com/o/images%2F2c9zsiippz9ib2gpk16z1ehnqqx1?alt=media&token=c8c13b26-d286-4e84-81ea-78fafd622333',
        'https://firebasestorage.googleapis.com/v0/b/letakol-62166.appspot.com/o/images%2F3yp60d533di9xt1dhgpup2sreue8?alt=media&token=8ff1b9fd-5f67-4488-ad71-cbf1e52b522b'
    ];
    const randomImage = saddly_hard_coded_images[random(saddly_hard_coded_images.length)];
    const extention = 'png';
    request(randomImage, 'binary').then(data =>
        message.channel.send({ file: createTMPImage(data, extention) }).then(_ => cleanTMPImage(extention))
    );
}

module.exports = fetchImage;
