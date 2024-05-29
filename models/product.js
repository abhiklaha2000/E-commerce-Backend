const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    inventory_quantity:{
        type:Number,
        required:true
    },
    product_quantity:{
        type:Number,
        default:1,
        required:true
    }
})

const product = new mongoose.model('Product',productSchema);

module.exports = product;