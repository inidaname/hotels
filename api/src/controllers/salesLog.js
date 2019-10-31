import { salesLogModel } from '../models/index.js';

export async function createSaleLog(req, res){
  try {
    const addLog = await salesLogModel.create({...req.body});

    if (addLog) {
      return res.status(200).json({message: `Log successfully`, data: addLog});
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message})
  }
}

export async function editSales(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Log to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateLog = await salesLogModel.findByIdAndUpdate(id, updates, { new: true }).lean();

    if (updateLog) {
      return res.status(200).json({ message: `Log updated successfully`, data: updateLog });
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function deleteLog(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Log to edit must be selected`, status: 400 }
    }
    const toDelete = await salesLogModel.findByIdAndDelete(id, {new: true});

    if (toDelete) {
      return res.status(200).json({ message: `Log Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

