const express = require('express');

const {create}= require('../../controllers/tweet-controller');
const{toggleLike} = require('../../controllers/like-controller');
const {createComment} = require('../../controllers/comment-controller');
const {signup} = require('../../controllers/auth-controller');

const router = express.Router();

router.post('/tweets',create);
router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);
router.post('/signup',signup);

module.exports = router;