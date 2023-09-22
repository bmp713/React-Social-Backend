const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: String,
    userName: String,
    first: String,
    last: String,
    email: String,
    userImg: String
});

module.exports = mongoose.model('Users', usersSchema);



 