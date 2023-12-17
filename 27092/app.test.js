import request from "supertest";
import app from "./index.js";

describe("POST /api/product/rateproduct", () => {
  it("should provide a successful response containing the product details, including the updated ratings, in case of valid input", async () => {
    const response = await request(app).post(
      "/api/product/rateproduct?userId=2&productId=3&rating=4"
    );
    // console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual(
      expect.objectContaining({
        id: 3,
        name: "samsung",
        price: 60000,
        ratings: expect.arrayContaining([
          expect.objectContaining({ rating: "4", userId: "2" }),
        ]),
      })
    );
  });
  it("For invalid user ID:", async () => {
    const response = await request(app).post(
      "/api/product/rateproduct?userId=5&productId=3&rating=4"
    );

    expect(response.body.success).toBe(false);
    expect(response.body.msg).toMatch(/user not found/i);
  });
  it("For invalid product ID:", async () => {
    const response = await request(app).post(
      "/api/product/rateproduct?userId=2&productId=5&rating=4"
    );
    expect(response.body.success).toBe(false);
    expect(response.body.msg).toMatch(/product not found/i);
  });
  it("For invalid rating", async () => {
    const response = await request(app).post(
      "/api/product/rateproduct?userId=2&productId=2&rating=10"
    );
    expect(response.body.success).toBe(false);
    expect(response.body.msg).toMatch(/rating should be b\/w 0 and 5/i);
  });
});
