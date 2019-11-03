import { userModel, dataModel } from '../models/index.js';

export async function getUserById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      throw { message: `User does not exist`, status: 404 };
    }

    const findUser = await userModel.findById(id).lean().select('-password -__v').populate('dataId', '-__v').exec();

    if (!findUser) {
      throw { message: `Could not find user`, status: 404 };
    }

    return res.status(200).json({ message: `User found`, data: findUser });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const deleteOne = await userModel.findByIdAndDelete(id);

    if (deleteOne) {
      return res.status(200).json({ message: `Deleted successfully`, data: deleteOne });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllUser(req, res) {
  try {
    const allUser = await userModel.find().populate('dataId');
    if (allUser) {
      return res.status(200).json({ message: `All User are here`, data: allUser });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getData(req, res) {
  try {
    const allData = await dataModel.find();

    if (allData) {
      return res.status(200).json({ data: allData, message: `All data here` });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
