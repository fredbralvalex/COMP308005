var Feedback = require('mongoose').model('Feedback');

exports.render = function (request, response) {
    console.log(".. feedback.server.controller Render ");
    var session = request.session;

    if (session.email) {
        if (session.isAdmin) {
            response.redirect('/viewfeedbacks');
        } else {
            console.log("User email: " + session.email);            
            var user = session.user;
            console.log("User: " + user);            
            response.render('feedback', { email: user.email, firstName: user.firstName, lastName: user.lastName, favSport: user.favSport, strongSkill: user.strongSkill });
        }
    } else {
        console.log("Not logged");
        response.redirect('/');
    }
}

exports.create = function (req, res, next) {
    var session = req.session;
    console.log(".. feedback.server.controller Create ");
    var feedback = new Feedback(req.body);
    console.log("body: " + req.body.comments);
    if (!feedback.email || !feedback.comments) {
        console.log(".. feedback.server.controller Create fields required!");
        var user = session.user;
        console.log("User: " + user);
        res.render('feedback', { errorMsg: 'Email and Comments are required!!', email: user.email, firstName: user.firstName, lastName: user.lastName, favSport: user.favSport, strongSkill: user.strongSkill  });
    }
    feedback.save(function (err) {
        if (err) {
            var str = "" + err;
            var strls = str.split(':');
            var msg = strls[strls.length - 1];
            //return next(err);
            //res.render('feedback', { errorMsg: msg });
            var user = session.user;
            console.log("User: " + user);
            res.render('feedback', { errorMsg: msg, email: user.email, firstName: user.firstName, lastName: user.lastName, favSport: user.favSport, strongSkill: user.strongSkill });
        } else {
            session.comments = feedback.comments; 
            res.redirect('/thankyou');
        }
    });
};

exports.list = function (req, res, next) {
    console.log(".. feedback.server.controller List ");
    Feedback.find({}, function (err, feedback) {
        if (err) {
            return next(err);
        } else {
            /*
            var distinct = 
            feedback.map(item => item.age).filter((value, index, self) => self.indexOf(value) === index)
            console.log(distinct);*/

            var map = new Map();
            feedback.forEach((item) => {
                const key = item.email;
                const collection = map.get(key);
                if (!collection) {
                    map.set(key, [item]);
                } else {
                    collection.push(item);
                }
            });
            console.log(map);
            res.render('viewfeedbacks', { feedbacks: map });
        }
    });
};