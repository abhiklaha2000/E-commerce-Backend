const { request } = require('express');
const Cart =  require('../models/cart');
const Product = require('../models/product');

// Adding products to Cart
const addToCart = async(req,res)=>{
    try{
        const cart = await Cart.findOne({userId: req.body.userId}); 
        if(cart){   // checking if the cart exists or not
             const productId = req.params.productId;
             const product = await Product.findOne({_id: productId});
             const items = cart.cartItems;  // getting the cartItems
             const present = items.findIndex(i => i.productId == productId);  // checking if the product is present in the cart or not
             if(present > -1 ){
                 items[present].quantity = items[present].quantity + 1;     
             }else{
                 items.push({productId: product._id,name: product.name,description :product.description,price:product.price,inventory_quantity:product.inventory_quantity, quantity: product.product_quantity});
             }

             const new_cart = await Cart.findOneAndUpdate({userId: req.body.userId}, { cartItems: items}, {new: true} );
             res.send(new_cart);
         }
         else{  // if cart doesn't exist, creating a cart
            const productId = req.params.productId;
            const product = await Product.findOne({_id: productId});
            const cart = new Cart({userId: req.body.userId, cartItems: [{productId: product._id,name: product.name,description :product.description,price:product.price,inventory_quantity:product.inventory_quantity, quantity: product.product_quantity}]});
            await cart.save();
            res.send(cart);
         }
    }catch(err){
        res.send(err);
    }
}

// Get User Cart
const getCart = async(req,res) =>{
    try{
        const cart = await Cart.findOne({userId: req.user._id}); 
        if(cart){ 
         res.send(cart);
       }
       else
       {
         res.json({message:"Your Cart is Empty!!!"});
       }

    }catch(err){
        console.log(err);
    }
}


//Remove product from a cart
const removeFromCart = async(req,res) =>{
    try{

        const cart = await Cart.findOne({userId: req.body.userId}); 
        if(cart){   // checking if the cart exists or not
             const productId = req.params.productId;
             const items = cart.cartItems;  // getting the cartItems
             const present = items.findIndex(i => i.productId == productId);
             if(present > -1){
                            
                items.splice(present,1);
                const new_cart = await Cart.findOneAndUpdate({userId: req.body.userId}, { cartItems: items}, {new: true} );
                res.send(new_cart);
                
             }
           
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addToCart,
    getCart,
    removeFromCart
}