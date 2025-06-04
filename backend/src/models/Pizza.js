import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  ingredients: [String],
  imageUrl: String,
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Pizza', pizzaSchema);
