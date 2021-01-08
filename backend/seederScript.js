const Cars = require("./models/carModel");
const carData = require("./data/carProducts");
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await Cars.deleteMany({});
    await Cars.insertMany(carData);
    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("BOO...Error with data import:", error);
    process.exit(1);
  }
};

importData();
