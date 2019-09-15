import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import * as muv from 'mongoose-unique-validator';

const roomsSchema = new mongoose.Schema({
    roomName: {
        type: String,
        unique: true
    },
    roomNumber: {
        type: Number,
        required: [true, `Please provide the room Number`],
        unique: true,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an Number'
        }
    },
    roomDescription: {
        type: String
    },
    roomType: {
        type: String
    },
    roomStatus: {
        type: String,
        enum: ['Free', 'Occupied'],
        default: 'Free'
    },
    occupant: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer'
    },
    roomRate: {
        type: String,
        required: [true, `Please provide room rate`]
    }
}, {timestamps: true});

roomsSchema.plugin(muv);

export default mongoose.model('Rooms', roomsSchema, 'rooms');