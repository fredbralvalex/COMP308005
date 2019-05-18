var User = require('mongoose').model('User');

//never used
exports.render = function (request, response) {
    console.log(".. user.server.controller Render ");
    var firstName = request.body.firstName;
    console.log("In feedback.ejs sent first name: " + firstName);
    response.render('thankyou');
}

exports.create = function (req, res, next) {
    console.log(".. user.server.controller Create ");
    var user = new User(req.body);
    user.isAdmin = req.body.isAdmin === 'on';
    if (!user.email || !user.password) {
        console.log(".. user.server.controller Create fields required!");
        res.render('signup', { errorMsg: 'Email and Password are required!!' });
    }
    //check password
    user.save(function (err) {
        if (err) {
            var str = "" + err;
            var strls = str.split(':');
            var msg = strls[strls.length - 1];
            //return next(err);
            res.render('signup', { errorMsg: msg });
        } else {
            res.render('index');
        }
    });
};

exports.list = function (req, res, next) {
    console.log(".. user.server.controller List ");
    console.log("... list user");
    User.find({}, function (err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.getUserByEmail = function (req, res, next) {
    console.log(".. user.server.controller GetUserByEmail");
    User.findOne({ email: session.email}, function (err, user) {
        if (err) {
            return next(err);
        } else {
            //res.render('feedback', { email: user.email, firstName: user.firstName, lastName: user.lastName, favSport: user.favSport, strongSkill: user.strongSkill });
            //res.json(user);
            return user;
        }
    });
};

exports.makeLogin = function (req, res, next) {    
    console.log(".. user.server.controller MakeLogin ");
    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (err) {
            console.log(".. user.server.controller MakeLogin ERROR!");
            return next(err);
        } else {
            var session = req.session;
            session.errorMsg = null;
            if (user === null) {
                console.log(".. user.server.controller MakeLogin user does not exists!");
                //session.errorMsg = 'User does not exists!!';
                res.render('index', { errorMsg: 'User does not exists!!'});
            } else {
                session.email = user.email;
                session.isAdmin = user.isAdmin;
                session.user = user;
                console.log("isAdmin: " + user.isAdmin);
                res.redirect('/feedback');
            }

            /*
            if (user.isAdmin) {
                res.redirect('/viewfeedbacks');
            } else {
                res.render('feedback', { email: user.email, firstName: user.firstName, lastName: user.lastName, favSport: user.favSport, strongSkill: user.strongSkill });
            }*/
        }
    });
};
