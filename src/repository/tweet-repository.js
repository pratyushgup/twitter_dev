const Tweet = require('../models/tweet');

class TweetRepository{
    async create(data){
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet = Tweet.findById(id).populate({path:'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId,data){
        try {
            const tweet = Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet; 
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;