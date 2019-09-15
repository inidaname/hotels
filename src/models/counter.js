import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import * as muv from 'mongoose-unique-validator';

const counterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: [true, `Please Select user`],
        ref: 'User'
    },
    fullName: {
        required: [true, `Please provide your Full Name`],
        type: String
    },
    phoneNumber: {
        type: String
    },
    profilePic: {
        type: String
    }
}, {timestamps: true});

export default mongoose.model('Counter', counterSchema, 'counter');