import { restaurantModel } from '../models/index.js';

export async function createMeal(req, res) {
  try {
    const meal = await restaurantModel.create({...req.body});

    if (meal) {
      return res.status(200).json({message: `Meal created successfully`, data: meal});
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}
