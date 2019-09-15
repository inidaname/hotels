import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import * as muv from 'mongoose-unique-validator';

const adminSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: [true, `Please provide User`],
        ref: 'User'
    },
    fullName: {
        required: [true, `Please provide your Full Name`],
        type: String
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    profilePic: {
        type: String
    }
}, {timestamps: true});

adminSchema.plugin(muv);

export default mongoose.model('Admin', adminSchema, 'admin');