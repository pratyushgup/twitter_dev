const UserService = require('../services/user-service');

const userService = new UserService();

const signup = async(req,res)=>{
    try {
        const response = await userService.signup({
            email: req.body.email,
            password:req.body.password,
            name: req.body.name
        })
        return res.status(201).json({
            success:true,
            message:'Successfully created a new user',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Something went wrong',
            data:{},
            err:error
        })
    }
}

const login = async(req,res)=>{
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if(!user){
            return res.status(401).json({
                message:'no user found',
                success:false 
            })
        }
        if(!user.comparePassword(req.body.password)){
            return res.status(401).json({
                message:'Incorrect password',
                success:false 
            })
        }
        const token = user.genJWT();
        return res.status(200).json({
            success:true,
            message:'Successfully logged in',
            data:token,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Something went wrong',
            data:{},
            err:error
        })
    }
}

module.exports = {
    signup,
    login
}