const controller = require('./event.controller');

module.exports = (app => {
    // Custom route
    app.get('/api/event', controller.getEvents) //work;
    app.get('/api/event/:id', controller.getEventById) //work;
    app.post('/api/event', controller.createEvent) //work;
    app.put('/api/event', controller.updateEvent) //work;
    app.delete('/api/event/:id', controller.deleteEvent) //work;

})