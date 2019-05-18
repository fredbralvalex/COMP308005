var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var FeedbackSchema = new Schema({
    email: { type: String, trim: true, required: true },
    comments: { type: String, trim: true, required: true }
});
mongoose.model('Feedback', FeedbackSchema);