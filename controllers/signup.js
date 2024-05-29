const User = require("../models/user");
const bcrypt = require('bcrypt');

// Hashing the password
const securePassword = async(password) => {
    try{
  
         const passwordHash = await bcrypt.hash(password,10);
         return passwordHash;
  
       }
  
    catch(err)
    {
        console.log(err);
    }
  }
  
  const insertUser = async (req, res) => {
    try {
  
       //checking if user is present in the datebase
       const document_found = await User.countDocuments();
       
       if(!document_found){
  
        const password_secured = await securePassword(req.body.password);
  
        const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: password_secured,
        is_admin:"1"
      });
  
      const userData = await user.save();
      res.send(userData);
      }
       
      else{
        const password_secured = await securePassword(req.body.password);
  
        const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: password_secured
      });
  
      const userData = await user.save();
      res.send(userData);
      }
       
    }
  
    catch (err) {
      console.log(err.message);
    }
  };

  module.exports = {
    insertUser
  }