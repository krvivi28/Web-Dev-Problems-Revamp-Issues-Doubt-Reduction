# Secure Page Access with Express-Session

## Introduction

Given a view, "secure-page.ejs," accessible through the GET route ('/'), access to this view should be restricted to logged-in users only. Users who are not logged in must be prevented from accessing the secure page. Implement this functionality using express-session. Additionally, complete the "auth" function within the middleware and incorporate it into the GET Route ('/') to authenticate users before granting access to the secure page. Modify the "loginUser" controller to seamlessly integrate this authentication process.

## Objectives

1. Implement secure access to the "secure-page.ejs" view.
2. Restrict access to the page for non-logged-in users.
3. Implement the "auth" middleware to authenticate users and apply it to the GET Route ('/').
4. Modify the "loginUser" controller to support the authentication process.

## Note

Users can log in using the POST Route ('/login'). Analyze all provided routes and their controllers to gain a clear understanding of the data flow for user authentication.

## Expected Output

The "secure-page.ejs" view should only be accessible to users who have logged in. Non-logged-in users should either be redirected or denied access to the page.

[View Expected Output GIF](https://files.codingninjas.in/topic6-28208.gif)

## Notes/Hints

1. The "auth" function should check if the user is logged in and return an appropriate response.
2. Consider using middleware to apply the authentication logic before accessing the secure page.
