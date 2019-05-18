const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'Name cannot be blank'
    },
    code: {
        type: String, default: '',
        trim: true,
        required: 'Code cannot be blank'
    },
    section: {
        type: String, default: '',
        trim: true,
        required: 'Section cannot be blank'
    },
    semester: {
        type: String, default: '',
        trim: true,
        required: 'Semester cannot be blank'
    },
    student: {
        type: Schema.ObjectId,
        ref: 'Student'
    }
});
mongoose.model('Course', CourseSchema);