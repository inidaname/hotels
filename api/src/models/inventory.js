import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  stockName: {
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
  department: {
    type: String
  },
  condition: {
    type: String
  },
  serialNumber: {
    type: Number
  },
  image: String
}, { timestamps: true });

export default mongoose.model('Inventory', inventorySchema, 'inventory');
