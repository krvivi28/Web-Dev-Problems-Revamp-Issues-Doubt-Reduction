# Title: Implement Product Rating Feature for E-commerce Project

# Introduction + Scenario:

You are working on an E-commerce project and have been assigned the task of implementing a product rating feature. Users should be able to rate products using their user ID, product ID, and the desired rating as query parameters. Invalid inputs (user ID, product ID, or rating out of range) should be handled, returning appropriate JSON responses. The feature will enhance user engagement and help in making informed purchase decisions.

# Objectives:

1. Implement the "rateProduct" controller for the route "api/product/rateproduct" that handles user ratings for products.

2. Pass the userId, productId, and rating as query parameters. For example: http://localhost:3000/api/product/rateproduct?userId=2&productId=3&rating=4.
   Note:

   1. Analyze all endpoints for a better understanding.
   2. You can find a valid user ID in the user model, or you can register as a new user using the endpoint '/api/user/register.'
   3. Initially, the 'products' array in the product model may not have a ratings array for each product. You can add a new field for ratings as an array, and all ratings related to the product should be pushed into it. For a user whose rating is already present, the rating should be updated.
   4. Sample output after rating a product:

   post("/api/product/rateproduct?userId=2&productId=3&rating=4");
   response:

   {
   success: true,
   msg: { id: 3, name: 'samsung', price: 60000, ratings: [ { rating: "4", userId: "2" } ] }
   }

3. Validate user input for user ID, product ID, and rating, responding with appropriate JSON objects for invalid cases.

4. Ensure that product ratings fall within the range of 0 to 5.

5. Provide a successful response containing the product details, including the updated ratings, in case of valid input.

# Expected Output:

GIF LINK: https://files.codingninjas.in/filterproduct-29549.gif

# For invalid user ID:

{
"success": false,
"msg": "user not found"
}

# For invalid product ID:

{
"success": false,
"msg": "product not found"
}

# For invalid rating:

{
"success": false,
"msg": "rating should be b/w 0 and 5"
}

# For a valid case:

{
"success": true,
"product": {
"id": 3,
"name": "samsung",
"price": 60000,
"ratings": [
{
"userId": "2",
"rating": "4"
}
]
}
}

# Notes/Hints:

Remember to handle edge cases and input validation thoroughly.
Implement error handling for scenarios like invalid user IDs, product IDs, and out-of-range ratings.
