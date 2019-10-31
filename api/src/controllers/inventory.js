import { inventoryModel } from '../models/index.js';

export async function createInventory(req, res) {
  try {
    const inventory = await inventoryModel.create({ ...req.body });

    if (inventory) {
      return res.status(200).json({ message: `Inventory add successfully`, data: inventory });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function editInvenotry(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Inventory to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateProduct = await inventoryModel.findByIdAndUpdate(id, updates, { new: true }).lean().select('-__v').exec();

    if (updateProduct) {
      return res.status(201).json({ message: `Product updated successfully`, data: updateProduct })
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function deleteInventory(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Product to edit must be selected`, status: 400 }
    }
    const toDelete = await inventoryModel.findByIdAndDelete(id, {new: true});

    if (toDelete) {
      return res.status(200).json({ message: `Room Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}
