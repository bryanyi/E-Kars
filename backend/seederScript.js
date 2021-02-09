const Cars = require("./models/carModel");
const productsData = require("./data/carProducts");
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await Cars.deleteMany({});
    await Cars.insertMany(productsData);
    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import. Error listed here:", error);
    process.exit(1);
  }
};

importData();
