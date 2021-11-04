const express = require('express');
const app = express();
const mongoose = require('./mongoose');
const eventsRoute = require('../api/event/event.raute');

const bodyParser = require('body-parser');

function initMedelWhere() {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
};

function initServer() {
    initMedelWhere();
    mongoose.initDb();
    initRout();
    app.listen(3000);
};

function initRout() {
    eventsRoute(app);
};

module.exports = {
    initServer
};