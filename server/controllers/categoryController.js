const Categories = require("../models/categoryModel");

// create category
module.exports.createCategory = async (req, res) => {
  try {
    const category = await Categories.create(req.body);
    await category.save();
    res
      .status(201)
      .json({ msg: `Category created successfully.`, data: category });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// read category

// module.exports.allCategories = async (req, res) => {
//   try {
//     const category = await Categories.find();
//     if (!category) {
//       return res.status(404).json({ msg: `Categories not found!` });
//     }
//     res.status(200).json({ data: category });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// delete category
module.exports.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Categories.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ msg: `Category with ID ${id} not found!` });
    }
    res
      .status(200)
      .json({ msg: `Category with ID ${id} deleted successfully.` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};

// update category

module.exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Categories.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({ msg: `Category with ID ${id} not found!` });
    }
    res
      .status(200)
      .json({ msg: `Category with id ${id} updated.`, data: category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error });
  }
};
