module.exports = function(app) {

    var index = require('../controllers/index.server.controller.js');
    app.get('/', index.render);
    app.post('/', function (request, response) {
        index.render(request, response);
    });

    var feedback = require('../controllers/feedback.server.controller.js');
    app.get('/feedback', feedback.render);

    var thankyou = require('../controllers/thankyou.server.controller.js');
    app.post('/feedback', thankyou.render);
}