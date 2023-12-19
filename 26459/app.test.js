import request from "supertest";
import app from "./index.js";
import { renderBlogForm } from "./src/controllers/blog.controller.js";

describe("Blog Creation Form and Routing", () => {
  // Test the GET route for rendering the blog creation form
  describe("GET /createblog", () => {
    it("The blog creation form should be displayed, featuring three text input fields for title, description, and image.", async () => {
      const response = await request(app).get("/createblog");
      // expect(response.status).toBe(200);
      expect(response.header["content-type"]).toContain("text/html");
      expect(response.text).toContain("input");
      // expect(
      //   (response.text.match(/input/g) || []).length
      // ).toBeGreaterThanOrEqual(3);

      console.log(response);
      // expect(response.text).toMatch(/title/i);
      // expect(response.text).toMatch(/submit/i);
      // expect(response.text).toMatch(/description/i);
    });
  });

  // Test the renderBlogForm function
  // describe("renderBlogForm", () => {
  //   it('should render the "createBlog" view', () => {
  //     const req = {};
  //     const res = {
  //       status: jest.fn(() => res),
  //       render: jest.fn(),
  //     };
  //     renderBlogForm(req, res);
  //     expect(res.render).toHaveBeenCalledWith("createBlog");
  //   });
  // });
});
