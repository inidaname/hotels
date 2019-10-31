import { supplyModel, productModel } from '../models/index.js';

export async function createSupply(req, res) {
  try {
    const supplies = await supplyModel.create({ ...req.body });

    if (supplies) {
      // const prod = await productModel.findOneAndUpdate(supplies.productSupplied, { quantity:  +supplies.quantity }) // go through mongoose for quick update
      return res.status(200).json({ message: `Supplies added successfully`, data: supplies })
    }
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
}

