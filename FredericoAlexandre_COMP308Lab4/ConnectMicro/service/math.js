var request = require('request');

const microURL = 'http://localhost:10101/';

var math = {

   //http://localhost:10101/act?role=math&cmd=sum&left=1&right=2

   sum: function(req, res, next) {
       let path = microURL
       + 'act?role=math&cmd=sum&left=' + req.params.left + '&right=' 
       + req.params.right;
       console.log(path);
       request(path,
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