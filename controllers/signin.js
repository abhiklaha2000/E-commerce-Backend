const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


// User can LogIn with the email and password
const logIn = async (req, res) => {
    const { email, password } = req.body;
      
         // Check if user exists
            const user = await User.findOne({ email });
  
            if(user){
              const passwordMatch = await bcrypt.compare(password,user.password);
  
              if(passwordMatch){
  
            // Create and return JWT token
            const token = jwt.sign(
              { _id: user._id, email: user.email, is_admin: user.is_admin },
              "secret_key",
              { expiresIn: "1d" }
            );
            res.json({
              message: "Successfully logged in!",
              token,
            });
          }
          else {
            res.json({message:"Please enter the correct password"});
        }
       }
      
       if (!user) {
           return res.status(401).json({ message: "Invalid credentials" });
        }
   }

   module.exports = {
    logIn
   }