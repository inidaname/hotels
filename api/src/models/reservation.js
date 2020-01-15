import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  guestName: String,
  roomType: {
    type: mongoose.Types.ObjectId,
    ref: 'RoomType'
  },
  amountDeposite: Number,
  reservedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  receiptNo: String,
  VIP: Boolean 
}, {timestamps: true})

export default mongoose.model('Reservation', reservationSchema, 'reservation');
