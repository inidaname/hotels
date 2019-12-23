import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const productSchema = new mongoose.Schema({
  name: {
    required: [true, `Please provide product Name`],
    type: String,
    unique: true
  },
  manufacturer: {
    type: String,
    required: [true, `Please provide product manufacturer`]
  },
  poolBarPrice: {
    type: Number,
    required: [true, `Please provide the unit Price`]
  },
  mainBarPrice: {
    type: Number,
    required: [true, `Please provide the unit Price`]
  },
  productType: {
    type: String,
    enum: ['Perishable', 'Non-Perishable']
  },
  expiryDate: {
    type: Date,
    required: [true, `Please provide Expiry date`]
  },
  quantity: {
    type: Number
  },
  productDept: {
    type: String,
    required: [true, `Please provide the department product belong to`]
  }
}, { timestamps: { createdAt: 'added_on', updatedAt: 'edited_on' } });


productSchema.plugin(validator);

export default mongoose.model('Product', productSchema, 'product');
