﻿// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define a new 'StudentSchema'
const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    address:String, 
    city:String, 
    phoneNumber: {
        type:String, 
        match: [/^(\+([0-9]){1,3})?([0-9]){10}$/, "Please fill a valid phone number"]},
    program:String,
    email: {
        type: String,
        // Validate the email format
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    studentNumber: {
        type: String,
        // Set a unique 'studentNumber' index
        unique: true,
        // Validate 'studentNumber' value existance
        required: 'StudentNumber is required',
        // Trim the 'studentNumber' field
        trim: true
    },
    password: {
        type: String,
        required: 'Password is required',
        // Validate the 'password' value length
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        // Validate 'provider' value existance
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    }
});

// Set the 'fullname' virtual property
StudentSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
StudentSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

// Create an instance method for hashing a password
StudentSchema.methods.hashPassword = function (password) {
    //digest parameter required in version 9 of Node.js
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating Student
StudentSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

// Find possible not used studentNumber
StudentSchema.statics.findUniqueStudentNumber = function (studentNumber, suffix, callback) {
    // Add a 'studentNumber' suffix
    const possibleStudentNumber = studentNumber + (suffix || '');

    // Use the 'Student' model 'findOne' method to find an available unique studentNumber
    this.findOne({
        studentNumber: possibleStudentNumber
    }, (err, student) => {
        // If an error occurs call the callback with a null value, otherwise find find an available unique studentNumber
        if (!err) {
            // If an available unique studentNumber was found call the callback method, otherwise call the 'findUniqueStudentNumber' method again with a new suffix
            if (!student) {
                callback(possibleStudentNumber);
            } else {
                return this.findUniqueStudentNumber(studentNumber, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

// Configure the 'StudentSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);