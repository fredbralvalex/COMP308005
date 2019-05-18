// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'StudentSchema'
const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: {
        type:String, 
        match: [/^(\+([0-9]){1,3})?([0-9]){10}$/, "Please fill a valid phone number"]},
    program:String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    studentNumber: {
        type: String,
        unique: true,
        required: 'StudentNumber is required',
        trim: true
    },
    created: {
        type: Date,
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

StudentSchema.statics.findOneByNumber = function (studentNumber, callback) {
    this.findOne({ studentNumber: studentNumber}, callback);
}

// Configure the 'StudentSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);