const {
  createProducts,
  getCategories,
  getAllProducts,
} = require("../controllers/appCotrollers");

const router = require("express").Router();

router.post("/createProduct", createProducts);
router.get("/getAllCategories", getCategories);
router.get("/getAllProducts", getAllProducts);
module.exports = router;
