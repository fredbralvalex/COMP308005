//this is a plugin code that is converted to a real microservice
module.exports = function math(options) {

    this.add('role:math,cmd:sum', function sum(msg, respond) {
        respond(null, { answer: msg.left + msg.right })
    })

    this.add('role:math,cmd:product', function product(msg, respond) {
        respond(null, { answer: msg.left * msg.right })
    })

    //automates the call to specific action patterns.
    this.wrap('role:math', function (msg, respond) {
        msg.left = Number(msg.left).valueOf()
        msg.right = Number(msg.right).valueOf()
        this.prior(msg, respond)
    })

}