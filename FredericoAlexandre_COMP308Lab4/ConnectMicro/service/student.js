var request = require('request');

const apiKey = '';
const microURL = 'http://localhost:8080/';

var math = {
   find: function(req, res, next) {
       request(microURL + apiKey 
               + '/math/sum/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/mile',
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({answer: -1});
           }
       });

   }
};

var student = {
    find: function(req, res, next) {
        request(microURL + apiKey 
                + '/math/sum/' + req.params.zipcode1 + '/' 
                + req.params.zipcode2 + '/mile',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                response = JSON.parse(body);
                res.send(response);
            } else {
                console.log(response.statusCode + response.body);
                res.send({answer: -1});
            }
        });
 
    }
 };

module.exports = math;