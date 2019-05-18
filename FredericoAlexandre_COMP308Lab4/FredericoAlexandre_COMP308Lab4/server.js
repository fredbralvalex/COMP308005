process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const configureMongoose = require('./config/mongoose');

// Create a new Mongoose connection instance
const db = configureMongoose();

//create the seneca object

require('seneca')()
    .use('math') //use math microservice
    .use('student')
    .listen(10101) // make it to listen on port 10101
