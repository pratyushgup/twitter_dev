const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetService = require('./services/tweet-service');

app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('Mongo db connected');
    let service = new TweetService();
    const tweet = await service.create({content:'This is capital #DELHI #BILLI #HILLI'});
    console.log(tweet);
})    
