const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    id: String,
    msgId: String,
    userId: String,
    userImg: String,
    userName: String,
    comment: String,
    time: String,
    date: String
});

module.exports = mongoose.model('Comments', commentsSchema);



 