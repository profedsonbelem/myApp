const express = require("express");  
const serverRoutes = require("./server-routes"); 
const request = require("supertest");  
const app = express();  
app.use("/states", serverRoutes);  
describe("testing-server-routes", () => {
  it("GET /states - success", async () => {
    const { body } = await request(app).get("/states"); //uses the request function that calls on express app instance
    expect(body).toEqual([
      {
        state: "NJ",
        capital: "Trenton",
        governor: "Phil Murphy",
      },
      {
        state: "CT",
        capital: "Hartford",
        governor: "Ned Lamont",
      },
      {
        state: "NY",
        capital: "Albany",
        governor: "Andrew Cuomo",
      },
    ]);
  });
});