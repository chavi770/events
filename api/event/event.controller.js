const {
    Event
} = require('./event.model');


// get the list of the events
async function getEvents(req, res) {
    try {
        var result = await Event.find({});
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

// Get spesfic event by id
async function getEventById(req, res) {
    try {
        var result = await Event.findById(req.params.id);
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }

};

// Create new event and add to collection
async function createEvent(req, res) {
    const event = new Event(req.body);
    try {
        var result = await event.save();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

// Updating the corrent event by id
async function updateEvent(req, res) {
    try {
        //The object to update
        var updateOBj = req.body;
        // Invoke the update in the db
        var result = await Event.findOneAndUpdate({
            _id: req.body._id
        }, updateOBj, {
            new: true,
            useFindAndModify: false
        });
        // Sending the reuslt
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }

};

// Delete event by id in the params
async function deleteEvent(req, res) {
    try {
        var result = await Event.findOneAndRemove({
            _id: req.params.id
        });
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }

};

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
}