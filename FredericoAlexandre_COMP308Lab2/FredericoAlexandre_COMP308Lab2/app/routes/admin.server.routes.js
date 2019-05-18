module.exports = function(app) {
    var feedback = require('../controllers/feedback.server.controller.js');
    app.get("/viewfeedbacks", feedback.list);
};

