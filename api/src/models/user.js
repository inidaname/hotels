import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, `Please provide your Full Name`]
  },
  password: {
    type: String,
    required: [true, `Please provide password`]
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: [true, `Please provide your Email address`]
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: [true, `Please provide your Phone Number`]
  },
  username: {
    type: String,
    unique: true
  },
  userType: {
    type: String,
    enum: [
      'admin',
      'account',
      'stock',
      'user'
    ],
    default: 'user'
  },
  dataId: {
    type: mongoose.Types.ObjectId,
    ref: 'Data'
  }
}, { timestamps: true });

userSchema.plugin(validator);

userSchema.pre('save', function(next) {
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

export default mongoose.model('User', userSchema, 'user');
