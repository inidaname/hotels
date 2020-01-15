import { roomLogsModel, salesLogModel, restaurantLogModel } from '../models'
import moment from 'moment'

export async function getAllRoomlog(req, res) {
  try {
    const getProducts = await roomLogsModel.find().lean().select('-__v').populate('room', '-__v').populate('checkedInBy', '-password -__v').populate('checkedOutBy', '-password -__v').exec();

    return res.status(200).json({ message: `Product List return`, data: getProducts });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllSaleslog(req, res) {
  try {
    const getProducts = await salesLogModel.find().lean().select('-__v').populate('sellerId', '-password -__v').populate('productSold.productDetail', '-__v').exec();

    return res.status(200).json({ message: `Product List return`, data: getProducts });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllRestaurantlog(req, res) {
  try {
    const getProducts = await restaurantLogModel.find().lean().select('-__v').exec();

    return res.status(200).json({ message: `Product List return`, data: getProducts });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}