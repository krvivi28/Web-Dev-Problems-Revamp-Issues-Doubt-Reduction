import UserController from "./src/controllers/user.controller";
import app from "./index.js";
import request from "supertest";
import { registerUser, users } from "./src/models/user.model";

const userController = new UserController();

describe("GET /register", () => {
  it("renders the user-register view", async () => {
    const resp = await request(app).get("/register");
    expect(resp.header["content-type"]).toContain("text/html");
    expect(resp.text).toContain("register");
  });
});
describe("GET /login", () => {
  it("renders the user-login view", async () => {
    const resp = await request(app).get("/login");
    expect(resp.header["content-type"]).toContain("text/html");
    expect(resp.text).toContain("login");
    console.log(resp.text);
  });
});

describe("POST /register", () => {
  it("redirects to user-login view upon successful registration", async () => {
    const resp = await request(app).post("/register").type("form").send({
      name: "vivek",
      email: "krvivi28@gmail.com",
      password: "vivek28@",
    });
    expect(resp.status).toBe(200);
    expect(resp.header["content-type"]).toContain("text/html");
  });
});

describe("POST '/register' and '/login'", () => {
  it("should authenticate user for valid credentials and send proper message", async () => {
    await request(app).post("/register").type("form").send({
      name: "cn",
      email: "cn@gmail.com",
      password: "cn28@",
    });
    const resp = await request(app).post("/login").type("form").send({
      email: "cn@gmail.com",
      password: "cn28@",
    });
    expect(resp.body.message).toMatch(/login successfull/i);
  });
});
