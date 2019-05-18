exports.render = function (request, response) {
    console.log(".. index.server.controller Render ");
    var session = request.session;

    if (session && session.email) {
        console.log("Session email: " + session.email);
        response.redirect('/feedback');
    }
    else {
        console.log("Going to Render Index ");
        response.render('index');
    }
}