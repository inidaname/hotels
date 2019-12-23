import { stockModel } from '../models';

export async function createStock(req, res) {
  try {
    const stock = await stockModel.create({ ...req.body });

    if (stock) {
      return res.status(200).json({ message: `Stock add successfully`, data: stock });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function editStock(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Stock to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateStock = await stockModel.findByIdAndUpdate(id, updates, { new: true }).lean().select('-__v').exec();

    if (updateStock) {
      return res.status(201).json({ message: `Stock updated successfully`, data: updateStock })
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllStock(req, res) {
  try {
    const getAll = await stockModel.find().select('-__v').exec();

    if (getAll) {
      return res.status(200).json({message: `All List of stock`, data: getAll});
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function deleteStock(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Stock to edit must be selected`, status: 400 }
    }
    const toDelete = await stockModel.findByIdAndDelete(id, {new: true});

    if (toDelete) {
      return res.status(200).json({ message: `Room Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}
