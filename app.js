const express = require('express');
require('./db/conn');
const app = express();
const port = process.env.Port || 4000;
const userRouter =  require("./routes/user");
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const categoryRouter = require('./routes/category');

// for User Routes
app.use('/',userRouter);

// For Product Routes
app.use(productRouter);

// For cart Routes
app.use(cartRouter);

// For Category Routes
app.use(categoryRouter);


app.listen(port,() =>{
    console.log(`listening on ${port}`);
})