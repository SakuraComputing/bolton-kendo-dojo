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

// @route GET api/posts
// @desc Get posts
// @access Public
router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found"}));
})

// @route GET api/posts/:id
// @desc Get post by id
// @access Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No post found with that Id"}));
})


// @route POST api/posts
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
});

// @route DELETE api/posts/:id
// @desc Delete post by Id
// @access Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        if(post.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorised: "User not authorized "})
        }
        post.remove().then(() => res.json({ success: true }))
        .catch(err => res.statusMessage(404).json({ postnotfound: "No post found "}))
    })
})


module.exports = router;