import app from "./index.js";
import request from "supertest";
import path from "path";

describe("POST '/' Multipart Form Data Request with name, email and profile image", () => {
  it("should successfully submit a multipart form-data request", async () => {
    const response = await request(app)
      .post("/")
      .field("name", "codingNinjas")
      .field("email", "cn@gmail.com")
      .attach("image", path.join(__dirname, "cn.png"));

    expect(response.statusCode).toEqual(200);
  });
});

describe("form validation middleware using express-validator", () => {
  it("Validate the user's name", async () => {
    const response = await request(app)
      .post("/")
      .field("email", "krvivi28@gmail.com")
      .attach("image", path.join(__dirname, "cn.png"));

    expect(response.text).not.toBe("");
    // console.log(response.status);
    // console.log(response.body);
    // console.log(response.text);
  });
});

describe("form validation middleware using express-validator", () => {
  it("Validate the user's email", async () => {
    const response = await request(app)
      .post("/")
      .field("name", "vivek")
      .attach("image", path.join(__dirname, "cn.png"));

    expect(response.text).not.toBe(" ");
  });
});
