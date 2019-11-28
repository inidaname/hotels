import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    unique: true
  },
  roomNumber: {
    type: Number,
    unique: true
  },
  roomType: String,
  roomDescription: String,
  roomStatus: {
    type: String,
    enum: ['occupied', 'available'],
    default: 'available'
  },
  roomCondition: String,
  roomPrice: {
    type: Number,
    required: [true, `Please provide the price for the room`]
  },
  image: String
}, {timestamps: true});

roomSchema.plugin(validator);

export default mongoose.model('Room', roomSchema, 'room');
