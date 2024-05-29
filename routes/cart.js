const express = require('express');
const cart_router = new express.Router();
const authMiddleware = require('../middlewares/auth');


const bodyParser = require('body-parser');
cart_router.use(bodyParser.json())
cart_router.use(bodyParser.urlencoded({extended:true}));

// Cart Controller
const CartController = require('../controllers/cart');

cart_router.post('/cart/add/:productId',CartController.addToCart);
cart_router.get('/cart',authMiddleware,CartController.getCart);
cart_router.delete('/cart/remove/:productId',CartController.removeFromCart);


module.exports = cart_router;
