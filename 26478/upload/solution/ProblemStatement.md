# Product Search Functionality Implementation in Node.js MVC Pattern

A developer is looking to enhance a Node.js application by implementing a search functionality following the MVC (Model-View-Controller) pattern. The search feature is designed to be housed within the "views/layout.ejs" file, where a search bar captures user input and queries for matching products by their name. The search bar is implemented as a form that triggers a POST request to the '/search' endpoint. Assist the developer in achieving this objective by completing the following tasks.

# Objectives

1. Create a view named "searchResult.ejs" inside the 'views' directory to visually present the search results.

2. The "searchResult.ejs" view should be responsible for rendering the search results in a user-friendly format, utilizing custom HTML and CSS styling to display results, such as a product card.

3. Implement the 'search' controller inside the 'productcontroller.js' file to handle the POST request at the '/search' endpoint and seamlessly render the search data through the "searchResult.ejs" view.

Note: The POST request at '/search' sends the product name in req.body through the search form implemented in 'layout.ejs' within the 'views' directory.

# Output

The anticipated output is a GIF showcasing the desired behavior of the search functionality.

Access the demonstration GIF via the following link:
https://files.codingninjas.in/search-27996.gif

# Notes and Hints

1. In 'layout.ejs', the search form's action attribute should be set to '/search' and the method attribute to 'POST'.

2. When rendering the "searchResult.ejs" view, pass the relevant data (search results) to be displayed.

3. Leverage the 'res.render()' method to render the "searchResult.ejs" view with the appropriate data.
