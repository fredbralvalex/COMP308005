exports.render = function (request, response) {
    console.log(".. signup.server.controller Render ");
    response.render('signup');

    /* dont need this now
    var session = request.session;
    if (session.email) {
        response.redirect('/index');
    }
    else
    {
    }*/
}