import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import muv from 'mongoose-unique-validator';

const companySchema = new mongoose.Schema(
	{
		companyName: {
			type: String,
			required: [ true, `Please provide a company name` ]
		},
    username: {
      type: String,
      trim: true,
      unique: true
    },
		userType: {
			type: String,
			enum: [ 'Admin', 'Worker', 'Customer' ],
			default: 'Admin'
		},
		companyEmail: {
			type: String,
			required: [ true, `Please provide a company email` ],
			lowercase: true,
      trim: true,
      unique: true
		},
		password: {
			type: String,
			required: [ true, `Please provide a password` ]
		}
	},
	{ timestamps: true }
);

companySchema.plugin(muv);

companySchema.pre('save', function(next) {
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

export default mongoose.model('Company', companySchema, 'company');

