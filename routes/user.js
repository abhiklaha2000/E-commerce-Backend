const express =  require('express');
const user_router = new express.Router();
// const authMiddleware = require('../middlewares/auth');

const bodyParser = require('body-parser');
user_router.use(bodyParser.json())
user_router.use(bodyParser.urlencoded({extended:true}));



// Register Controller
const registerController = require('../controllers/signup');
user_router.post('/auth/signup',registerController.insertUser);


// Login Controller
const loginController = require('../controllers/signin');
user_router.post('/auth/signin',loginController.logIn);



module.exports = user_router;

