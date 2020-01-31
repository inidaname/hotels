import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  registeredBy:{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  fullName: {
    type: String,
    required: [true, `Please provide your Full Name`]
  },
  username: {
    type: String,
    unique: true
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
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: [true, `Please provide your Phone Number`]
  },
  userType: {
    type: String,
    enum: ['superadmin', 'admin', 'user'],
    default: 'superadmin'
  }
}, { timestamps: true });

userSchema.plugin(validator);

userSchema.pre('save', function(next) {
	if (this.password && !this.isModified('password')) {
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

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};



export default mongoose.model('User', userSchema, 'user');
