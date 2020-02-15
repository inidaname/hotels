import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
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
  passportNo: String,
  issuedAt: String,
  issueDate: String,
  customerNumber: String,
  nextOfKin: String,
  nextOfKinNumber: String,
  nextOfKinRelation: String,
  companyName: String,
  companyAddress: String,
  companyNumber: String,
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
}, {timestamps: true})

export default mongoose.model('Customer', customerSchema, 'customer');
