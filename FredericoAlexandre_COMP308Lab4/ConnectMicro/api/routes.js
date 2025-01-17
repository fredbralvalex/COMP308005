'use strict';

var controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/math/sum/:left/:right')
       .get(controller.make_sum);
};