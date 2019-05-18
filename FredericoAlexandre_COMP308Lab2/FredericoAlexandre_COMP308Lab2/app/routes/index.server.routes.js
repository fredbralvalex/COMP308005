module.exports = function(app) {
    var users = require('../controllers/users.server.controller');
    var index = require('../controllers/index.server.controller.js');
    var feedback = require('../controllers/feedback.server.controller.js');
    var thankyou = require('../controllers/thankyou.server.controller.js');
    var signup = require('../controllers/signup.server.controller.js');

    app.get('/', index.render);
    app.post('/', users.makeLogin);

    app.get('/feedback', feedback.render);
    app.post('/feedback', feedback.create);

    app.get('/signup', signup.render);
    app.post('/signup', users.create);

    app.get('/thankyou', thankyou.render);
    app.get('/logout', function (request, response) {
        request.session.destroy();
        console.log(".. Logout: Session Destroyed ");
        response.redirect('/');
    });
}