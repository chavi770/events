var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    title:String,
    description:String,
    date:String,
});

var Event = mongoose.model('event', eventSchema);

module.exports = {
    Event
}