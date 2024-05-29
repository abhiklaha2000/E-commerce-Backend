const express = require('express');
const category_router = new express.Router();
const authMiddleware = require('../middlewares/auth');


const bodyParser = require('body-parser');
category_router.use(bodyParser.json());
category_router.use(bodyParser.urlencoded({ extended:true}));

// For category Controller
const categoryController = require('../controllers/category');

category_router.post('/add-category',authMiddleware,categoryController.createCategory)
category_router.get('/get-category',categoryController.getCategory)


module.exports = category_router;