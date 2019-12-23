import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please provide name of Stock`]
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    required: [true, `Please provide quantity of stock`]
  },
  
  manufacturer: String,
  valuePrice: Number,
}, { timestamps: true });

export default mongoose.model('Stock', stockSchema, 'stock');
