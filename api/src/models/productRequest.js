import mongoose from 'mongoose';
const stockRequestSchema = new mongoose.Schema({
  requestBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  productRequest: [{
    productDetail: {
      type: mongoose.Types.ObjectId,
      ref: 'Stock'
    },
    productQuantity: {
      type: Number
    }
  }],
  bar: {
    type: String,
    enum: ['poolBar', 'mainBar']
  },
  approvedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  status:{
    type: String,
    enum: ['pending', 'approved', 'decline'],
    default: 'pending'
  }

}, { timestamps: true });

export default mongoose.model('StockRequest', stockRequestSchema, 'stockRequest');