import { expenditureModel } from '../models';

export async function createExpen(req, res) {
  try {
    const createEx = await expenditureModel.create({ ...req.body });

    if (createEx) {
      return res.status(200).json({message: `Created Successfully`, data: createEx});
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function editExpenditure(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Expenditure to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateProduct = await expenditureModel.findByIdAndUpdate(id, updates, { new: true }).lean().select('-__v').exec();

    if (updateProduct) {
      return res.status(201).json({ message: `Expenditure updated successfully`, data: updateProduct })
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function deleteExpenditure(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Expenditure to delete must be selected`, status: 400 }
    }
    const toDelete = await expenditureModel.findByIdAndDelete(id, {new: true});

    if (toDelete) {
      return res.status(200).json({ message: `Expenditure Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}
