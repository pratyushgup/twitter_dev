const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('Mongo db connected');
    const tweets = await Tweet.find({
        content:["Second Tweet","Third Tweet","12589"]
    });
    console.log(tweets);
})    