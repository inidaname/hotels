import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const productSchema = new mongoose.Schema({
  productName: {
    required: [true, `Please provide product Name`],
    type: String,
    unique: true
  },
  manufacturer: {
    type: String,
    required: [true, `Please provide product manufacturer`]
  },
  productPrice: {
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
  manufacturedDate: {
    type: Date,
    required: [true, `Please provide Expiry date`]
  },
  image: String,
  serialNumber: {
    type: String,
    required: [true, `Please provide the Serial Number`]
  },
  quantity: {
    type: Number
  },
  productDept: {
    type: String,
    required: [true, `Please provide the department product belong to`]
  }
}, { timestamps: { createdAt: 'added_on', updatedAt: 'edited_on' } });

// consider return policy for products

productSchema.plugin(validator);

export default mongoose.model('Product', productSchema, 'product');
