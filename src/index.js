const express = require('express');
const connect = require('./config/database');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');

const {UserRepository,TweetRepository} = require('./repository/index');
const LikeService = require('./services/like-service');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);


app.listen(3000,async ()=>{

    console.log('Server Started');
    await connect();
    console.log('Mongo db connected');

    const userRepo = new UserRepository();
    const tweetrepo = new TweetRepository();
    const likeService = new LikeService();
    const tweets = await tweetrepo.getAll(0,10);
    const user = await userRepo.getAll();
    await likeService.toggleLike(tweets[0].id,'Tweet',user[0].id);
      
})     
 