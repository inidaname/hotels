import mongoose from 'mongoose';

const roomLogsSchema = new mongoose.Schema({
  checkedInBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  customerName: {
    type: String,
    required: [true, `Please provide customer's name`]
  },
  customerEmail: {
    type: String
  },
  customerPhone: {
    type: String
  },
  customerAddress: {
    type: String
  },
  customerPurpose: {
    type: String
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: 'Room'
  },
  checkedOutBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  checkedInStatus: {
    type: String,
    enum: ['checked in', 'checked out', 'reserved']
  },
  amountPaid: {
    type: Number,
    required: [true, `Please provide amount to pay`]
  },
  customerIDCard: {
    type: String
  },
  paymentMethod: {
    type: String
  },
  customerTotalCharge: {
    type: Number,
    required: [true, `Please provide amount to charge customer`]
  },
  // otherServices: []
}, {timestamps: true})

export default mongoose.model('RoomLogs', roomLogsSchema, 'roomLogs');
