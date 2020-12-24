const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  car: String,
  image: String,
  price: String,
  miles: String,
  year: String,
  condition: String,
});

const cars = mongoose.model("cars", carSchema);
