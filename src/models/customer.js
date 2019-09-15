import mongoose from 'mongoose';
import muv from 'mongoose-unique-validator';

const customerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    fullName: {
        type: String,
        required: [true, `Please provide customer details`]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    previousRooms: [{
        type: mongoose.Types.ObjectId,
        ref: 'Rooms'
    }],
    room: {
        type: mongoose.Types.ObjectId,
        ref: 'Rooms'
    }
}, {timestamps: true});

customerSchema.plugin(muv);

export default mongoose.model('Customer', customerSchema, 'customer');