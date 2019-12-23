import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

const restaurantSchema = new mongoose.Schema({
  mealName: {
    type: String,
    required: [true, `Please provide a name`]
  },
  mealDescription: String,
  mealPrice: Number,
});

restaurantSchema.plugin(validator);

export default mongoose.model('Restaurant', restaurantSchema, 'restaurant');
