const Category = require('../models/category'); 

// Create Category 
const createCategory = async(req,res) => {
    try{
    const user = req.user;
    if(user.is_admin === 1){
       const category = new Category({
        category_name:req.body.category_name
       })
       await category.save();
       res.send(category);
    }
    else{
        res.json({
            message:"You are not authorized to perform this action"
        })
    }
  }
  catch(err){
        console.log(err.message);
    }
}

// Get all categories
const getCategory = async(req,res) => {
    try{
    
        const category = await Category.find();
        res.send(category);

    }catch(err){
        console.log(err.message);
    }
}


module.exports = {
    createCategory,
    getCategory
}