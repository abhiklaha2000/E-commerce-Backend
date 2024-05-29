const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-commerce_Backend").then(() => {
    console.log('Connected to Mongodb!!!');
}
).catch((err) =>{
    console.log(err);
})
