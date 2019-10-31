import mongoose from 'mongoose';

const salesLogSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  productSold: [{
    productDetail: {
      type: mongoose.Types.ObjectId,
      ref: 'Product'
    },
    productQuantity: {
      type: Number
    }
  }],
  amountPaid: {
    type: Number,
    required: [true, `Please provide amount paid`]
  },
  changeReturn: {
    type: Number
  },
  discount: {
    type: Number
  },
  paymentMethod: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('SalesLog', salesLogSchema, 'salesLog');
