import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const incomeSchema = new mongoose.Schema({
    recievedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    paymentMethod: {
        type: String
    },
    barSales: {
        type: mongoose.Types.ObjectId,
        ref: 'SalesLog'
    },
    mealSales: {
        type: mongoose.Types.ObjectId,
        ref: 'RestaurantLog'
    },
    checkOut: {
        type: mongoose.Types.ObjectId,
        ref: 'RoomLogs'
    },
    amountRecieved: {
        type: Number
    }
}, { timestamps: true })

export default mongoose.model('Income', incomeSchema, 'income');
