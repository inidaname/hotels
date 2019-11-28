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

export async function editMeal(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      throw { message: `Meal to edit must be selected`, status: 400 };
    }

    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateMeal = await restaurantModel.findByIdAndUpdate(id, updates, { new: true }).lean();

    if (updateMeal) {
      return res.status(200).json({ message: `Room updated successfully`, data: updateMeal });
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}


export async function getAllMeal(req, res) {
  try {
    const meals = await restaurantModel.find().lean().select('-__v').exec();

    return res.status(200).json({message: `All available meals`, data: meals});
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function deleteMeal(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Meal to delete must be selected`, status: 400 }
    }
    const toDelete = await restaurantModel.findByIdAndDelete(id);

    if (toDelete) {
      return res.status(200).json({ message: `Meal Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}


export async function getMealById(req, res) {
  try {
    const {id} = req.params;

    if (!id) {
      throw {message: `Meal dose not exist`, status: 404};
    }

    const getMeal = await restaurantModel.findById(id).lean().select('-__v').exec();

    if (!getMeal) {
      throw {message: `Meal dose not exist`, status: 404};
    }

    return res.status(200).json({message: `Meal requested`, data: geMeal});

  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

