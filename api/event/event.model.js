var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name:String,
    description:String,
    start:String,
    end:String,
    color:String,
});

var Event = mongoose.model('event', eventSchema);

module.exports = {
    Event
}