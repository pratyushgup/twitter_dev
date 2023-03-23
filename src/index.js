const express = require('express');
const connect = require('./config/database');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const passport = require('passport');

const {passportAuth} = require('./config/jwt-middleware')




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api',apiRoutes);


app.listen(3000,async ()=>{

    console.log('Server Started');
    await connect();
    console.log('Mongo db connected');
      
})     
  