const express = require('express');
const product_router = new express.Router();
const authMiddleware = require('../middlewares/auth');


const bodyParser = require('body-parser');
product_router.use(bodyParser.json())
product_router.use(bodyParser.urlencoded({extended:true}));

// Product Controller
const ProductController = require('../controllers/product');
product_router.post('/products',authMiddleware,ProductController.createProduct);
product_router.get('/products',ProductController.getAllProducts);
product_router.get('/products/:id',ProductController.getProductById);
product_router.patch('/products/:id',authMiddleware,ProductController.updateProduct);
product_router.delete('/products/:id',authMiddleware,ProductController.deleteProduct);



module.exports = product_router;
