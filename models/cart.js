const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    Ref:'User',
    required:true,
  },
  cartItems: [Object]
  
},{timestamps:true});

const cart = new mongoose.model('Cart',cartSchema);

module.exports = cart;