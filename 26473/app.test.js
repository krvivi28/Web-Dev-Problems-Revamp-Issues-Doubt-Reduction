import request from "supertest";
import app from "./index.js";

describe("Node.js MVC App", () => {
  it("should render the blog form on GET /createblog", async () => {
    const response = await request(app).get("/createblog");
    console.log(response);
    // expect(response.status).toBe(200);
    // expect(response.text).toContain("Add Blog");
    expect(response.header["content-type"]).toContain("text/html");
  });

  it("should render the blogs on GET /", async () => {
    const response = await request(app).get("/");
    // expect(response.status).toBe(200);
    expect(response.header["content-type"]).toContain("text/html");
    expect(response.text).toContain("Coding Nijas");
    expect(response.text).toContain("Apple");
  });

  it("should add a new blog on POST /addblog", async () => {
    const newBlog = {
      title: "New Blog",
      description: "This is a new blog.",
      img: "https://example.com/image.jpg",
    };

    const response = await request(app)
      .post("/addblog")
      .type("form")
      .send(newBlog);

    // Check if the new blog is added to the blogs array
    const blogsResponse = await request(app).get("/");
    expect(blogsResponse.header["content-type"]).toContain("text/html");
    expect(blogsResponse.text).toContain(newBlog.title);
    expect(blogsResponse.text).toContain(newBlog.description);
    expect(blogsResponse.text).toContain(newBlog.img);
  });
});
