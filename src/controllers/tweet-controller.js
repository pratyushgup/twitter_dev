const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();

const create = async(req,res) =>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            message:'Successfully created a tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Cannot create a tweet',
            data:{},
            err:error
        })
    }
}

module.exports = {
    create
}