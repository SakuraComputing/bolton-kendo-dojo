const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// Post model
const Post = require('./models/Post');

// Va;idation
const validatePostInput = require('../validation/post');

//@route GET api/posts/test
// @desc Test post route
// @access Private
router.get('/test', (req, res) => res.json({
    mmsg: 'Posts works'
}));

//@route POST api/postst
// @desc Create post route
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    const { errors, isValid } = validatePostInput(req.body);

    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    console.log(req.body.text);
    
    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar, 
        user: req.user.id
    });

    newPost.save().then(post => res.json(post))
})


module.exports = router;