
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReCommentsSchema = new Schema({

    subCourse: {
        type: Schema.Types.ObjectId, ref: 'Comments'
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },
    comment: {
        type: Text,
        required: true
    },
    status: {
        type: Boolean,
        default: true //1:show
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
})

const ReComments = mongoose.model('ReComments', ReCommentsSchema)
module.exports = ReComments