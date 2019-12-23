import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    unique: true
  },
  roomTypeId: {
    type: mongoose.Types.ObjectId,
    ref: 'RoomType'
  },
  roomStatus: {
    type: String,
    enum: ['occupied', 'available', 'reserved'],
    default: 'available'
  },
  roomCondition: String,
}, {timestamps: true});

roomSchema.plugin(validator);

export default mongoose.model('Room', roomSchema, 'room');
