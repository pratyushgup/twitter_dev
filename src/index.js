const express = require('express');
const connect = require('./config/database');
const app = express();

// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDB connected');
    // const tweet = await Tweet.create({
    //     content:'Third Tweet',
    //     userEmail:'b@c.com'
    // });
    // const tweets = await Tweet.find({userEmail:'a@b.com'});
    const repo = new TweetRepository();
    const tweet = await repo.getAll(0,4);
    console.log(tweet[0].contentWithEmail);
})   