const express = require('express');

const {create}= require('../../controllers/tweet-controller');
const{toggleLike} = require('../../controllers/like-controller');
const {createComment} = require('../../controllers/comment-controller');
const {signup,login} = require('../../controllers/auth-controller');

const {authenticate} = require('../../middlewares/authenticate')

const router = express.Router();

router.post('/tweets',authenticate,create);
router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);
router.post('/signup',signup);
router.post('/login',login);

module.exports = router;