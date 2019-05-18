var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, index: true, match: /.+\@.+\..+/, trim: true, unique: true, required: true },
    userName: { type: String, trim: true },
    password: {
        type: String,
        validate: [(password) => password.length >= 3,
            'Password must contains at leat 3 characters']
    },
    favSport: String,
    strongSkill: String,
    isAdmin: Boolean,
    created: { type: Date, default: Date.now }
});

//example of a computed ('virtual') field
UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function () {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
    });

UserSchema.statics.findOneByEmail = function (email, callback) {
    this.findOne({ email: RegExp(email, 'i') }, callback);
}
mongoose.model('User', UserSchema);