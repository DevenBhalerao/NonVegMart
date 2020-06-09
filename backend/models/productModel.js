import mongoose from 'mongoose';

const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: Array },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  categoryId: { type: mongoose.Types.ObjectId },
  sellerid: { type: mongoose.Types.ObjectId, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
});

const productModel = mongoose.model('Product', prodctSchema);
export default productModel;
