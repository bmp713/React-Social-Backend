const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: String,
    email: String,
    password: String,
    first: String,
    last: String,
    userImg: String
});

module.exports = mongoose.model('Users', usersSchema);



 