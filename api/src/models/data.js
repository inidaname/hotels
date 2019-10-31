import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  sourceId: mongoose.Types.ObjectId,
  address: String,
  status: {
    type: String,
    enum: ['active', 'suspended', 'deactive', 'pending'],
    default: 'pending'
  },
  socailMedia: [{
    type: String
  }],
  about: String,
  maritalStatus: String,
  gender: String,
  createBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  image: String
}, {timestamps: true});

export default mongoose.model('Data', dataSchema, 'data');
