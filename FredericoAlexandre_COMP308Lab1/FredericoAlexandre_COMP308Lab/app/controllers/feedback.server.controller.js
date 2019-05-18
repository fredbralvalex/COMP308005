exports.render = function (request, response) {
    var session = request.session;
    console.log("In index.ejs sent email: " + session.email);


    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var favSport = request.body.favSport;
    var strongSkill = request.body.strongSkill;
    var comments = request.body.comments;

    session.firstName = firstName;
    session.lastName = lastName;
    session.favSport = favSport;
    session.strongSkill = strongSkill;
    session.comments = comments;

    console.log("In feedback.ejs got first name + lastname: " + firstName + " " + lastName);

    if (session.firstName) {
        response.redirect('./thankyou');
    } else {
        response.render('feedback', { email: session.email});
    }
}