const fs = require('fs');
const { errorCheck, random, request, firebase } = require('../../utils');
const TMP_FOLDER = '.tmp';
const TMP_FILE = 'tmp';

function createTMPImage(data, extention) {
    if (!fs.existsSync(TMP_FOLDER)) {
        fs.mkdirSync(TMP_FOLDER);
    }
    const path = `${TMP_FOLDER}/${TMP_FILE}.${extention}`;
    fs.writeFileSync(path, data, 'binary', error => errorCheck(error));
    return path;
}

function cleanTMPImage(extention) {
    fs.unlinkSync(`${TMP_FOLDER}/${TMP_FILE}.${extention}`, error => errorCheck(error));
}

function getExtentionFromData(data) {
    const magicToExtentions = [
        { magic: ['89', '50', '4e', '47', '0d', '0a', '1a', '0a'], ext: 'png' },
        { magic: ['ff', 'd8', 'ff', 'db'], ext: 'jpg' },
        { magic: ['ff', 'd8', 'ff', 'ee'], ext: 'jpeg' },
        { magic: ['47', '49', '46', '38', '37', '61'], ext: 'gif' },
        { magic: ['47', '49', '46', '38', '39', '61'], ext: 'gif' }
    ];
    for (let o = 0; o < magicToExtentions.length; o++) {
        const { magic, ext } = magicToExtentions[o];
        let match = true;
        for (let index = 0; match && index < magic.length; index++) {
            match = ('00' + data.charCodeAt(index).toString(16)).slice(-2) === magic[index];
        }
        if (match) {
            return ext;
        }
    }
    return null;
}

function getRandomFirestoreImage() {
    return firebase
        .firestore()
        .collection('images')
        .get()
        .then(snapshot => {
            const images = snapshot.docs.map(doc => doc.data());
            return images[random(images.length)];
        })
        .catch(error => errorCheck(error));
}

async function fetchImage(message) {
    const image = await getRandomFirestoreImage();
    request(image.data.url, 'binary').then(data => {
        image.extention = getExtentionFromData(data);
        if (image.extention) {
            message.channel
                .send({ file: createTMPImage(data, image.extention) })
                .then(_ => cleanTMPImage(image.extention));
        } else {
            logger.error(`no extention found for image ${image.id}`);
        }
    });
}

module.exports = fetchImage;
