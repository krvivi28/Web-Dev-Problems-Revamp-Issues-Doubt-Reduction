// Import the necessary modules and functions
import request from "supertest";
import app from "./index.js";
import ProductController from "./controllers/productController.js";

const productController = new ProductController();

describe("Search Functionality", () => {
  it("The 'POST' request to the '/search' endpoint should display filtered data that matches the name criteria using the 'searchResult.ejs' view.", async () => {
    const response = await request(app).post("/search").type("form").send({
      name: "apple",
    });

    expect(response.text).toContain("apple");
    expect(response.header["content-type"]).toMatch("text/html");
    expect(response.text).toContain(
      "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png"
    );
  });
});
