const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  id_: Number,
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
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  tags: {
    type: Array,
  },
});

const CarsModel = mongoose.model("cars", carSchema);

module.exports = CarsModel;
