import server from "./index.js";
import request from "supertest";
import { updateUser } from "./user.controller.js";
import { users } from "./user.model.js";
const initialUsersLength = users.length;

describe("POST /", () => {
  it("should update users array for a valid 'id' and render update-form view with updated user data", async () => {
    const response = await request(server).post("/").type("form").send({
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/image.jpg",
    });

    expect(response.text).toContain("John Doe");
    expect(response.text).toContain("john.doe@example.com");
  });
});
