const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('../api/users');
const club = require('../api/club');
const uploads = require('../api/uploads');
const posts = require('../api/posts')

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
let db;

if (process.env.NODE_ENV === 'production') {
    db = process.env.REACT_APP_MONGO_URI;
    console.log('server /server: ', db);
} else {
    db = require('../src/config/keys').mongoURI;
}
console.log('database: ', db);

// Connect to Mongo DB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo DB connected server.js', db))
    .catch(err => console.log(err));

app.use(passport.initialize());

// Passport Config
require('../src/config/passport')(passport);

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use Routes 
app.use('/api/users', users);
app.use('/api/club', club);
app.use('/api/uploads', uploads);
app.use('/api/posts', posts);

let port;

if(process.env.NODE_ENV === 'production') {
    port = process.env.PORT || 80;
    app.use(express.static(path.join(__dirname + '/build')));
    app.get('/*', (req,res) => {
        res.sendFile(path.join(__dirname, '/build/index.html'));
    });
} else {
    port = process.env.PORT || 5000;
}
app.listen(port, () => console.log(`Server running on port ${port}`));
