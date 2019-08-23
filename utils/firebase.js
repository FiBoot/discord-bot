require('dotenv').config();
const firebase = require('firebase');

const app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_APIKEY,
    projectId: process.env.FIREBASE_PROJECTID,
});

module.exports = app;
