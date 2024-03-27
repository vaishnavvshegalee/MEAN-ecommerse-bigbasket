const Categories = require("../models/categoryModel");
const Product = require("../models/productModel");

// create product
module.exports.createProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    await product.save();
    res
      .status(201)
      .json({ msg: "product created successfully.", data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};

// get all products
module.exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      return res.status(404).json({ msg: "products not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};

// get all categories
module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    if (!categories) {
      return res.status(404).json({ msg: "Categories not found" });
    }
    res
      .status(200)
      .json({ msg: "categories fetched succesfully", data: categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};
