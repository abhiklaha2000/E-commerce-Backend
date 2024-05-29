-To install all the dependencies run the following command:
npm i

-To start the application run the following command and make sure a local MongoDB Instance is installed and running:
npm run start

-Following are the routes that you can check using an API client like Postman

// Login API's
1. Create a User
Endpoint: '/auth/signup'
Method: 'POST'
Request Body Example: {
    "username": "Abhik Laha",
    "email":"abhik@gmail.com",
    "password":"1234" 
}

2. Login a user
Endpoint: '/auth/signin'
Method: 'POST'
Request Body Example: {
    "email":"abhik@gmail.com",
    "password":"1234" 
}
// After login a token is generated.

// For Category API's
1. Create a Category
Endpoint: '/add-category'
Method: 'POST'           //  It was Authenticated only Admin can Create Category
Request Body Example: {
  "category_name":"Clothing"
}

2. Get all the categories
Endpoint: '/get-category'
Method: 'GET'           
// User can see the categories in the stores


// For Product API's
1. Create a Product
Endpoint: '/products'
Method: 'POST'           //  It was Authenticated only Admin can Create Products
Request Body Example: {
    "name":"Blue Kurti",
    "description":"This is the best Kurti of all time, you can wash it, clean it anytime anywhere",
    "price":"400",
    "inventory_quantity":"5"
}

2. Get all Products
Endpoints:'/products'
Method:"GET"
// The user can see all the products without logged In.

3. Get Product By id
Endpoint: '/products/:id' // The id in url refers to the product id,
Method: 'GET'
// The user can see particular product with the {:id} passed in the url without logged In.

4. Update Product by id
Endpoints:'/products/id'  // The id in url refers to the product id,
Method:"PATCH"
// If the logged In user is Admin then he can update the products.

5. Delete Product By id
Endpoints:'/products/id' // The id in url refers to the product id,
Method:"DELETE"
// If the logged In user is Admin then he can delete the products.

// Cart API's
1. Add To Cart
  Endpoints:'/cart/add/:productId' //  The id in url refers to the product id
  Method:"POST"
  Request Body Example: {
    "userId": "66270579b72fa1ba2666e086" 
  }
  //Without logged In the user can add products to cart

2. Get User cart
   Endpoints:'/cart'
   Method:"GET"
   // If the user is Sign In ,the user can check the cart
   
3. Remove from a cart
   Endpoints:'/cart/remove/:productId' // The id in url refers to the product id
   Method:"DELETE"
   Request Body Example: {
    "userId": "66270579b72fa1ba2666e086"  
   }
   //Without logged In the user can remove the product from cart
