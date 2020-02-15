import { customerModel } from "../models";

export async function createCustomer(req, res) {
  try {
    const customer = await customerModel.create({ ...req.body });

    return res
      .status(200)
      .json({ message: `Room log successfully`, data: customer });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getCustmerBy(req, res) {
  try {
    const { guestDetail } = req.body;
    const customer = await customerModel
      .findOne({ $or: [{ customerEmail: guestDetail }, { customerNumber: guestDetail }] })
      .lean()
      .select("-__v")
      .populate("createdBy", "-__v")
      .exec();
    if (!customer) {
      throw { message: "Guest not found", status: 404 };
    }

    return res.status(200).json({ data: customer });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllCustomer(_, res) {
  try {
    const customer = await customerModel
      .find()
      .lean()
      .select("-__v")
      .populate("createdBy", "-__v")
      .exec();

    return res
      .status(200)
      .json({ message: `Product List return`, data: customer });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getcustomergById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      throw { message: `Can't find product`, status: 404 };
    }

    const customer = await customerModel
      .findById(id)
      .lean()
      .select("-__v")
      .populate("room", "-__v")
      .populate("checkedInBy", "-__v")
      .exec();

    if (!customer) {
      throw { message: `Could not find product`, status: 404 };
    }

    return res.status(200).json({ message: `Product found`, data: customer });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function updateCustomer(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Customer to edit must be selected`, status: 400 };
    }

    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const customer = await customerModel
      .findByIdAndUpdate(id, updates, { new: true })
      .lean()
      .populate("room", "-__v")
      .populate("createdBy", "-__v");
    if (customer) {
      return res
        .status(200)
        .json({ message: `Customer updated successfully`, data: customer });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function deleteCustomer(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Customer to delete must be selected`, status: 400 };
    }
    const toDelete = await customerModel.findByIdAndDelete(id);

    if (toDelete) {
      return res
        .status(200)
        .json({ message: `Room Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
