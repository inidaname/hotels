import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const roomTypeSchema = new mongoose.Schema({
  roomType: String,
  roomDescription: String,
  roomPrice: {
    type: Number,
    required: [true, `Please provide the price for the room`]
  },
}, {timestamps: true});

roomTypeSchema.plugin(validator);

export default mongoose.model('RoomType', roomTypeSchema, 'roomType');