# Form Validation and File Upload Middlewares

## Introduction:

For a user details form capturing name, email, and profile image, the goal is to develop two distinct middlewares: one for form validation and the other for handling file uploads. The validation middleware, located at "middleware/expressValidator.js," will leverage the express-validator library to validate form inputs and respond with specific error messages for empty name, invalid email, and missing profile image. Simultaneously, the file upload middleware, located at "middleware/fileUploadMiddleware.js," will manage the successful upload of profile images.

## Objectives:

1. Implement the form validation middleware inside "middleware/expressValidator.js" using express-validator.
2. Validate the user's name, email, and profile image inputs.
3. Respond with appropriate error messages: "Name is required" for an empty name, "Enter a valid email" for an invalid email, and "Profile image is required" for an empty profile image.
4. Implement the file upload middleware inside "middleware/fileUploadMiddleware.js" to handle the successful upload of profile images.

## Expected Output:

If any validation errors occur, the middleware should respond with the corresponding error message. Otherwise, the middleware should allow the form data and profile image to be successfully uploaded.

[View Expected Output GIF](https://files.codingninjas.in/uploadmiddleware-28184.gif)

## Notes/Hints:

1. Ensure the middleware correctly handles and responds with the specified error messages.
2. Export the file upload middleware as the default to enable importing as: `import imageUpload from "./middleware/fileUploadMiddleware.js";` in the `index.js` file.
3. Utilize the express-validator library for efficient form validation.
4. Follow best practices for handling file uploads in Express.js.
