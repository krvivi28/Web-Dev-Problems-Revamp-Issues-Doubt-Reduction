# Error Handling and Logging

## Introduction + Scenario:

In the provided e-commerce Node.js project, the objective is to implement an error-handling middleware situated at 'src/middlewares/errorHandler.js'. This middleware should function at the application level, effectively managing errors arising from various operations. Additionally, it should log each error into the designated 'error.log' file using the Winston logger ('src/middlewares/logger.middleware.js'). The middleware is designed to capture intentionally thrown errors with custom status codes and error messages. Unhandled errors should trigger a "500" status code along with the error message "Oops! Something went wrong... Please try again later!".

## Objectives:

1. Implement the 'errorHandlerMiddleware' located at 'src/middlewares/errorHandler.js' to effectively capture errors. This includes handling errors that are instances of 'customErrorHandler'.
2. Utilize the Winston logger library to log each captured error, following the provided example format:
   {"level": "error", "timestamp": "Tue Aug 08 2023 01:30:09 GMT+0530 (India Standard Time)", "request URL": "/", "error message": "testing app level error handling middleware"}.
   Logged errors must include essential details such as error level, timestamp, request URL, and error message.
3. Return the captured error message and status code as a response to the user for requests that fail and trigger errors.

## Expected Output:

[View Expected Output GIF](https://files.codingninjas.in/summative-lec-11-29962.gif)
