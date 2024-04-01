const {
  createProducts,
  getCategories,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/appCotrollers");
const {
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

const router = require("express").Router();
// products routes
router.post("/createProduct", createProducts);
router.get("/getAllCategories", getCategories);
router.get("/getAllProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

// category routes

router.post("/category/new", createCategory);
router.delete("/category/delete/:id", deleteCategory);
router.put("/category/update/:id", updateCategory);
module.exports = router;
