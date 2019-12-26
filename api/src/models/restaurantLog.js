import mongoose from 'mongoose';

const restaurantLogSchema = new mongoose.Schema({
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
  paymentMethod: {
    type: String
  },
  roomNumber: {
    type: mongoose.Types.ObjectId,
    ref: 'roomLog'
  },
  place: String,
  complimentVal: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  receipt:{
    type: String
  }
}, { timestamps: true });

export default mongoose.model('RestaurantLog', restaurantLogSchema, 'restaurantLog');
