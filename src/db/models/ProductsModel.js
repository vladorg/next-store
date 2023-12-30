import mongoose from 'mongoose';

const Products = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String, required: true }, 
  chars: { type: String, required: true }, 
  categoryId: { type: String, required: true }, 
  thumb: { type: String, required: true }, 
  price: { type: String, required: true }, 
  count: { type: Number, required: true }, 
  status: { type: Boolean, required: true }, 
  slug: { type: String, required: true },
})

const ProductsModel = mongoose.models.Products || mongoose.model('Products', Products);

export default ProductsModel;
