const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title required']
    },
    content: {
        type: String,
        required: [true, 'Content required']
    }
});

module.exports = mongoose.model('Post', postSchema);