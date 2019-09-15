import mongoose from 'mongoose';
import muv from 'mongoose-unique-validator';


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
        type: String,
        unique: true
    },
    profilePic: {
        type: String
    }
}, {timestamps: true});

counterSchema.plugin(muv);

export default mongoose.model('Counter', counterSchema, 'counter');