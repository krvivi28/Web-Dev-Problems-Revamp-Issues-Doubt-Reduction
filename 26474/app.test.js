import request from "supertest";
import app from "./index.js";

describe("Form Validation", () => {
  it("should validate the form fields", async () => {
    const response = await request(app).post("/addblog").type("form").send({
      title: "My Blog Title",
      description: "My Blog Description",
      image: "https://example.com/image.jpg",
    });
    expect(response.headers["content-type"]).toMatch(/html/i);
    expect(response.text).toMatch(/successful/i);
    expect(response.status).toBe(201);
  });

  it("should display error messages for invalid form fields", async () => {
    const response = await request(app).post("/addblog").type("form").send({
      title: "My",
      description: "My Blog",
      image: "invalid-url",
    });
    expect(response.status).toBe(401);
    expect(response.headers["content-type"]).toMatch(/html/i);
  });

  it("should display error messages for empty form fields", async () => {
    const response = await request(app).post("/addblog").type("form").send({
      title: "",
      description: "",
      image: "",
    });
    expect(response.status).toBe(401);
    expect(response.headers["content-type"]).toMatch(/html/i);
  });
});
