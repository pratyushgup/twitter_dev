const express = require('express');

const {create}= require('../../controllers/tweet-controller');
const router = express.Router();

router.post('/tweets',create);

module.exports = router;