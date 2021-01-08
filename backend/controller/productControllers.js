const CarsModel = require("../models/carModel");

const getAllProducts = async (req, res) => {
  try {
    const allCarProducts = await CarsModel.find({});
    res.json(allCarProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error!" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await CarsModel.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error!" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
