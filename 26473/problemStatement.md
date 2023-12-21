# Node.js MVC: Form Data Parsing and New Blog Addition

Enhance an existing Node.js MVC application by integrating form data parsing and routing functionality. Implement the following features within the current codebase:

## Render Blogs

You are provided with a GET route "/" in `index.js`. Develop its corresponding 'renderBlogs' controller to render the "blogs" view. This view should exhibit all the blog data from the 'blogs' array in the blog model. Additionally, create the "blogs" view using your custom HTML and CSS to present the blog data effectively.

## Render Blog Form

A GET route "/createblog" is available in `index.js`. Implement its corresponding 'renderBlogForm' controller to render the "renderBlogForm" view.

## Add New Blog

1. A POST route "/addblog" is provided in `index.js`.
2. Implement its corresponding 'addBlog' controller to manage the user's POST request through the 'addBlogForm' view.
3. Update the "blogs" array in `blog.model.js` with the newly added blog.
4. Render the "blog" view with the updated "blogs" array to display the newly added blog alongside the existing ones.

## Output

Refer to the sample output GIF file in the 'output' folder for the expected behavior of the implemented features.
Sample Output: [View Sample Output GIF](https://files.codingninjas.in/output-27944.gif)

## Note

Adhere to the Node.js MVC pattern to maintain a clear separation of concerns among models, views, and controllers. Utilize the EJS templating engine for rendering views. Your responsibility is limited to the specified changes within the existing codebase.
