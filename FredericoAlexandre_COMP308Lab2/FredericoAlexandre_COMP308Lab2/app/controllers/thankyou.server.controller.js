exports.render = function (request, response) {
    console.log("..thankyou.server.controller Render");
    var session = request.session;

    response.render('thankyou',
        {
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            comments: session.comments
        });
}