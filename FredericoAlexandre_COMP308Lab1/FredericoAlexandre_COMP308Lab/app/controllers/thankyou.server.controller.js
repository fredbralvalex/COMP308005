exports.render = function (request, response) {
    var firstName = request.body.firstName;
    console.log("In feedback.ejs sent first name: " + firstName);
    /* from feedback
    var session = request.session;

    var lastName = request.body.lastName;
    var email = request.body.email;
    var favSport = request.body.favSport;
    var strongSkill = request.body.strongSkill;
    var comments = request.body.comments;
    */
    response.render('thankyou');
}