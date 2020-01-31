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
  customerAddress:String,
  customerProfession: String,
  customerEmail: String,
  nationality: String,
  city: String,
  country: String,
  comingFrom: String,
  nextDestination: String,
  passportNo: String,
  issuedAt: String,
  issueDate: String,
  discount: Boolean,
  arrivalDate: {
    type: Date
  },
  departureDate: {
    type: Date
  },
  customerNumber: String,
  paymentMethod: String,
  companyName: String,
  companyAddress: String,
  companyNumber: String,
  purposeOfVisit: String,
  nextOfKin: String,
  nextOfKinNumber: String,
  nextOfKinRelation: String,
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
  receipt:{
    type: String,
    unique: true
  },
  image: [String]
  
 
}, {timestamps: true})

export default mongoose.model('RoomLogs', roomLogsSchema, 'roomLogs');
