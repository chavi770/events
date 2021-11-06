const express = require('express');
const app = express();
const mongoose = require('./mongoose');
const eventsRoute = require('../api/event/event.raute');
const serveStatic = require("serve-static")
const path = require('path');

const bodyParser = require('body-parser');

function initMedelWhere() {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
};
console.log(__dirname);
app.use(serveStatic(path.join('./dist')));
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