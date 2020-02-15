import mongoose from 'mongoose';

const roomLogsSchema = new mongoose.Schema({
  checkedInBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  discount: Boolean,
  arrivalDate: {
    type: Date
  },
  departureDate: {
    type: Date
  },
  paymentMethod: String,
  purposeOfVisit: String,
  roomNumber: String, //To be edited IMPORTANT
  room: {
    type: mongoose.Types.ObjectId,
    ref: 'Room'
  },
  checkedOutBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  numberOfPersons: Number,
  checkedInStatus: {
    type: String,
    enum: ['occupied', 'available', 'reserved'],
  },
  amountPaid: {
    type: Number,
    required: [true, `Please provide amount to pay`]
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'Customer'
  },
  receipt:{
    type: String,
    unique: true
  },
  image: [String],
  comingFrom: String,
  nextDestination: String,
  purposeOfVisit: String,


}, {timestamps: true})

export default mongoose.model('RoomLogs', roomLogsSchema, 'roomLogs');
