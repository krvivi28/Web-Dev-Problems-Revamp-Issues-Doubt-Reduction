Title: User Registration and Login Routes in MVC Project

Introduction:
In an MVC-based project, you have been given two views: "user-register.ejs" and "user-login.ejs." Your task is to create four routes to handle user registration and login functionalities. The project involves a web application where users can register and log in to access their accounts securely.

Objectives:

Title: User Registration and Login Routes in MVC Project

Introduction:
In an MVC-based project, you have been given two views: "user-register.ejs" and "user-login.ejs." Your task is to create four routes to handle user registration and login functionalities. The project involves a web application where users can register and log in to access their accounts securely.

# Objectives:

1. Implement a GET route "/register" that utilizes the 'getRegister' user controller to render the "user-register.ejs" view.

2. Implement a POST route "/register" that employs the 'addUser' user controller to manage the form submission from the "user-register" view. The 'addUser' controller should further utilize the 'registerUser' user model to append the user's registration data to the "users" array. Upon successful addition, redirect the user to the "user-login" view.

3. Implement a GET route "/login" that uses the 'getLogin' user controller to render the "user-login.ejs" view.

4. Implement a POST route "/login" that employs the 'loginUser' user controller to authenticate the user's login credentials. The controller should utilize the 'authenticateUser' user model to validate the user's login data. If the user is valid, respond with { success: "true", message: "login successful" }; otherwise, respond with { success: "false", message: "login failed" }.

Expected Output:

Upon successful user registration, the user should be redirected to the "user-login" view. When logging in, the system should authenticate the user's credentials and respond with either { success: "true", message: "login successful" } or { success: "false", message: "login failed" } based on the validation result.

Link: https://files.codingninjas.in/uploadmiddleware-28193.gif

Requirements:

1.MVC architecture
2.user.controller.js with getRegister, addUser, getLogin, and loginUser functions
3.user.model.js with registerUser and authenticateUser functions
4.Views: "user-register.ejs" and "user-login.ejs"

Notes/Hints:

Ensure proper routing and function implementation for each route.
Pay attention to the flow of data between the controller and the model.
Refer to the provided output GIF for a better understanding of the expected behavior.

Expected Output:

Upon successful user registration, the user should be redirected to the "user-login" view. When logging in, the system should authenticate the user's credentials and respond with either { success: "true", message: "login successful" } or { success: "false", message: "login failed" } based on the validation result.

Link: https://files.codingninjas.in/uploadmiddleware-28193.gif

Requirements:

1.MVC architecture
2.user.controller.js with getRegister, addUser, getLogin, and loginUser functions
3.user.model.js with registerUser and authenticateUser functions
4.Views: "user-register.ejs" and "user-login.ejs"

Notes/Hints:

Ensure proper routing and function implementation for each route.
Pay attention to the flow of data between the controller and the model.
Refer to the provided output GIF for a better understanding of the expected behavior.
