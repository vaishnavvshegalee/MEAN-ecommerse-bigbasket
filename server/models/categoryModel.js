const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryId: { type: Number, unique: true },
  categoryName: String,
});
categorySchema.pre("save", async function (next) {
  if (!this.categoryId) {
    // Find the highest existing categoryId and increment it
    const highestCategory = await this.constructor.findOne(
      {},
      {},
      { sort: { categoryId: -1 } }
    );
    this.categoryId = highestCategory ? highestCategory.categoryId + 1 : 1;
  }
  next();
});
const Categories = mongoose.model("Categories", categorySchema);
module.exports = Categories;
