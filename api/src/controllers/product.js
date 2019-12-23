import { productModel } from '../models/index.js';

export async function createProduct(req, res) {
  try {
    const { manufacturedDate, expiryDate } = req.body;

    // req.body.manufacturedDate = new Date(manufacturedDate.year, manufacturedDate.month, manufacturedDate.day)
    req.body.expiryDate = new Date(expiryDate.year, expiryDate.month, expiryDate.day)

    const addProduct = await productModel.create({ ...req.body });

    if (addProduct) {
      return res.status(200).json({ message: `Product successfully created`, data: addProduct })
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllProduct(req, res) {
  try {
    const getProducts = await productModel.find().lean().select('-__v').exec();

    return res.status(200).json({ message: `Product List return`, data: getProducts });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      throw { message: `Can't find product`, status: 404 };
    }

    const getProduct = await productModel.findById(id).lean().select('-__v').exec();

    if (!getProduct) {
      throw { message: `Could not find product`, status: 404 }
    }

    return res.status(200).json({message: `Product found`, data: getProduct});
  } catch (error) {
    return res.status(erro.status || 500).json({ message: error.message });
  }
}

export async function editProduct(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Product to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateProduct = await productModel.findByIdAndUpdate(id, updates, { new: true }).lean().select('-__v').exec();

    if (updateProduct) {
      return res.status(201).json({ message: `Product updated successfully`, data: updateProduct })
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Product to edit must be selected`, status: 400 }
    }
    const toDelete = await productModel.findByIdAndDelete(id, { new: true });

    if (toDelete) {
      return res.status(200).json({ message: `Room Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
