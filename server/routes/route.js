const {
  createProducts,
  getCategories,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/appCotrollers");

const router = require("express").Router();

router.post("/createProduct", createProducts);
router.get("/getAllCategories", getCategories);
router.get("/getAllProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
module.exports = router;
