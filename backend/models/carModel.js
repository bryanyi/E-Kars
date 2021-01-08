const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  car: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  miles: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

const CarsModel = mongoose.model("cars", carSchema);

module.exports = CarsModel;
