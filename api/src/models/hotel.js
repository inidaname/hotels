import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

// const Schema = ;

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: [true, `Please name of Hotel must be provided`]
  },
  email: {
    unique: true,
    required: [true, `Please email for the Hotel must be provided`],
    trim: true,
    lowercase: true,
    type: String
  },
  username: {
    type: String,
    trime: true,
    unique: true
  },
  password: {
    required: [true, `Please provide Password for login purpose`],
    type: String
  },
  phoneNumber: {
    type: String,
    unique: true
  },
  contactPerson: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  userType: {
    type: String,
    enum: [
      'admin',
      'account',
      'stock',
      'user'
    ],
    default: 'admin'
  },
  dataId: {
    type: mongoose.Types.ObjectId,
    ref: 'Data'
  }
}, {timestamps: true});

hotelSchema.plugin(validator);

hotelSchema.pre('save', function(next) {
	if (this.p && !this.isModified('password')) {
		return next();
	}
	bcrypt.hash(this.password, 10, (err, hash) => {
		if (err) {
			return next(err);
		}

		this.password = hash;
		next();
	});
});

export default mongoose.model('Hotel', hotelSchema, 'hotel');
