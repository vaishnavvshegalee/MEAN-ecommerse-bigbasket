const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryId: { type: Number, unique: true },
  categoryName: String,
});

const Categories = mongoose.model("Categories", categorySchema);
module.exports = Categories;
