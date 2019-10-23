import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import muv from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema(
	{
    username: {
      type: String,
      trim: true,
      unique: true
    },
    fullName: {
      type: String
    },
		email: {
			type: String,
			required: [ true, `Please provide an email` ],
			trim: true,
			lowercase: true,
			unique: true
		},
		userType: {
			type: String,
			enum: [ 'Admin', 'Worker', 'Customer' ],
			default: 'Admin'
		},
		password: {
			type: String,
			required: [ true, `Please provide a password` ]
		}
	},
	{ timestamps: true }
);

userSchema.plugin(muv);

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
