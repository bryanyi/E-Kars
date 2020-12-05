require("../models/carModel");
const mongoose = require("mongoose");
const Cars = mongoose.model("cars");

module.exports = (app) => {
  app.get("/api/products", async (req, res) => {
    const allCarProducts = await Cars.find({});
    res.send(allCarProducts);
  });
};
