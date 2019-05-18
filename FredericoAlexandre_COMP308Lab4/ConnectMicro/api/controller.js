'use strict';

var properties = require('../package.json')
var student = require('../service/student');
var math = require('../service/math');


var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   get_student: function(req, res) {
           student.find(req, res, function(err, student) {
               if (err)
                   res.send(err);
               res.json(student);
           });
       },
    make_sum: function(req, res) {
        math.sum(req, res, function(err, math) {
        if (err)
            res.send(err);
        res.json(math);
    });
},
};

module.exports = controllers;