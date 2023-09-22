require("dotenv").config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = process.env.PORT || 4000; 
const app = express();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors( {origin: '*'} )); 
app.use(express.static('public')); 
app.use('/assets', express.static('assets'));
app.listen(port, () => console.log('Server listening on port', port) );

// MongoDB Atlas for data
const mongoose = require('mongoose'); 
const connection = mongoose.connect(
    'mongodb+srv://bmp713:%40MongoDB310@cluster0.68vf5.mongodb.net/social/?retryWrites=true&w=majority', 
    { useUnifiedTopology: true, dbName: 'social' }
)
    .then( () => {
        console.log('Connected to the database ');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })

// Router endpoints for users
app.use("/users", require("./routes/users"));

// Router endpoints for messages
app.use("/messages", require("./routes/messages"));

// Router endpoints for comments
app.use("/comments", require("./routes/comments"));



