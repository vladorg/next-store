import mongoose from 'mongoose';

const Categories = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String, required: true },
  slug: { type: String, required: true },
  thumb: { type: String, required: true },
  status: { type: Boolean, required: true }, 
})

const CategoriesModel = mongoose.models.Categories || mongoose.model('Categories', Categories);

export default CategoriesModel;
