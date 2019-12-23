import mongoose from 'mongoose';

const expenditureSchema = new mongoose.Schema({
  expenditureInfo: {
    type: String,
    required: [true, `Please provide Information`]
  },
  estimate: {
    type: Number
  },
  approval: {
    type: String,
    enum: ['approved', 'declined', 'pending'],
    default: 'pending'
  },
  actionedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String
  },
  priorityLv: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    default: 0
  },
  amountRequesting: {
    type: Number,
    required: [true, `Please provide amount requesting`]
  },
  amountApprove: {
    type: Number
  },
  requestedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  purpose: {
    type: String
  },
  whenDue: Date,
  quantityRequest: {
    type: Number
  },
  productType: {
    type: String
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  paymentMethod: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('Expenditure', expenditureSchema, 'expenditure');
