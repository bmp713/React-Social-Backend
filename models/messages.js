const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    id: String,
    date: String,
    edited: String,
    email: String,
    first: String,
    last: String,
    likes: String,
    liked: String,
    message: String,
    time: String,
    userID: String,
    userImg: String,
    imageURL: String
});

module.exports = mongoose.model('Messages', messagesSchema);



 