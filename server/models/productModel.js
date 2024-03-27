const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productId: { type: Number, unique: true },
  productSku: String,
  productName: String,
  productPrice: { type: Number, default: 0 },
  productShortName: String,
  productDescription: String,
  createdDate: { type: Date, default: Date.now },
  deliveryTimeSpan: String,
  categoryId: { type: String, default: 0 },
  productImgUrl: String,
});

productSchema.pre("save", async function (next) {
  if (!this.productId) {
    // Find the highest existing productId and increment it
    const highestProduct = await this.constructor.findOne(
      {},
      {},
      { sort: { productId: -1 } }
    );
    this.productId = highestProduct ? highestProduct.productId + 1 : 1;
  }
  next();
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
