import mongoose from 'mongoose';

const supplySchema = new mongoose.Schema({
  productSupplied: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: [true, `Please indicate product supplied`]
  },
  quantitySupplied: {
    type: Number,
    required: [true, `Please provide quantity supplied`]
  },
  suppliedBy: {
    type: String
  },
  costOfGoods: {
    type: Number,
    required: [true, `Please provide the cost of goods supplied`]
  },
  purposeOfSupply: {
    type: String
  },
  recievedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  paymentMethod: {
    type: String
  }
}, {timestamps: true});

export default mongoose.model('Supply', supplySchema, 'supply');
