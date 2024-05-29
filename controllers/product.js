const Product = require('../models/product');

// Create product only from Admin
const createProduct = async(req,res) =>{
    try{

        const user = req.user;
        if(user.is_admin === 1){
        const product = new Product({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            inventory_quantity:req.body.inventory_quantity
           })

           const new_product = await product.save();
           res.send(new_product);
        }
      else{
         res.json({
            message:"Error!! You are not Admin"
         })
      }
    }catch(err){
        console.log(err.message);
    }
}

//Get all products
const getAllProducts =  async(req,res) => {
    try{
        
       const get_products = await Product.find();
       res.send(get_products);

    }
    
    catch(err){
       console.log(err.send);
    }
}

// Get product by ID
const getProductById = async(req,res) => {
    try{

       const _id = req.params.id;
       const get_product = await Product.findById(_id);
       res.send(get_product);

    }catch(err){
        console.log(err.message);
    }
}

//Update Product by ID
const updateProduct = async(req,res) => {
    try{

       const user = req.user;

      //checking if the logged In user is Admin or not
       if(user.is_admin === 1){
       const _id = req.params.id;
       const update_product = await Product.findByIdAndUpdate(_id,{name:req.body.name,description:req.body.name,price:req.body.price,inventory_quantity:req.body.inventory_quantity}, {
       new:true
       });
       res.send(update_product);
    }

    else{
        res.json({
            message:"Error!! You are not Admin"
        })
    }

    }catch(err){
        console.log(err.message);
    }
} 

// Delete product by Id 
const deleteProduct = async(req,res) =>{
    try{

   const user = req.user;
   //if the logged in user is Admin or not
   if(user.is_admin === 1){
    const _id = req.params.id;
    const deleted_product = await Product.findByIdAndDelete(_id);
    res.send(deleted_product);
   }

   else{
    res.json({
        message:"Error!! You are not Admin"
    })
   }

    }catch(err){
    console.log(err.message);
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}