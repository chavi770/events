var mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

function initDb() {
    mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("the db is connected");
        // we're connected!
    });
}

module.exports = {
    initDb
}