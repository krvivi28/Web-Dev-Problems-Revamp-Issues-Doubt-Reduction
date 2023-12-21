# Refactoring Express Routes for Tweet Feature

## Introduction

In the context of an existing web application featuring a 'tweet' functionality, the current implementation stores all routes in a single `index.js` file. The goal is to enhance code organization and maintainability by relocating these routes to a dedicated file named 'tweet.routes.js' within the 'src/features/tweet' directory, utilizing the express Router module. Following this refactoring, the middleware for accessing these routes in `index.js` should be set as 'app.use("/api/tweets", tweetRoutes)', and the route paths for 'getTweets' and 'createTweet' should be set to ('/') inside 'tweet.routes.js'. This refactoring aims to optimize the application's structure for better maintainability and scalability.

## Objectives

1. Refactor the code to move all route handlers from `index.js` to `tweet.routes.js`.
2. Ensure that the GET /api/tweets endpoint correctly lists all tweets.
3. Ensure that the POST /api/tweets endpoint successfully creates a new tweet.

## Expected Output

The `index.js` file should now exclusively contain middleware and server configurations, with all route handlers seamlessly transitioned to the `tweet.routes.js` file.

## Notes/Hints

1. Use the express Router module to create a dedicated file for routes.
2. Pay attention to the correct file structure and directory location, placing 'tweet.routes.js' within the 'src/features/tweet' directory.
3. Confirm that route handlers are appropriately moved and mapped to the respective endpoints.
