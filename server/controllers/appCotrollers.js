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

// update a product
module.exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ msg: `product of id ${id} not found! ` });
    }
    await product.save();
    res
      .status(200)
      .json({ msg: "Product updated successfully", updatedProductId: id });
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
    const data = await Categories.find();
    if (!data) {
      return res.status(404).json({ msg: "Categories not found" });
    }
    res.status(200).json({ msg: "categories fetched succesfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ msg: `Product with id ${id} not found!` });
    }
    res
      .status(200)
      .json({ msg: `Product with id ${id} deleted successdully.` });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
