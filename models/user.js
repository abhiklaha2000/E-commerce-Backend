const mongoose = require("mongoose");
const validator = require('validator');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Number,
        required:true,
        default: 0 // 0 = User, 1 = Admin , 2 = Regular
    },
},{timestamps:true});

const user = new mongoose.model("User",userSchema);

module.exports = user;