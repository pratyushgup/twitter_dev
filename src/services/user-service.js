const {UserRepository} = require('../repository/index')

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
           console.log("Something went wrong in service layer") 
        }
    }
}

module.exports = UserService;