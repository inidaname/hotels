import { roomTypeModel } from '../models';

export async function createRoomType(req, res) {
  try {
    // @TODO: user log activities implement here
    const newRoomType = await roomTypeModel.create({ ...req.body });
    if (newRoomType) {
      return res.status(200).json({ message: `Room created successfully`, data: newRoomType });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function updateRoomType(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Room to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateRoomType = await roomTypeModel.findByIdAndUpdate(id, updates, { new: true }).lean();

    if (updateRoomType) {
      return res.status(200).json({ message: `Room updated successfully`, data: updateRoomType });
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getAllRoomType(req, res) {
  try {
    const allRoomType = await roomTypeModel.find().lean().select('-__v').exec();

    return res.status(200).json({message: `List of all rooms`, data: allRoomType});
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function getRoomType(req, res) {
  try {
    const {id} = req.params;

    if (!id) {
      throw {message: `Rooms dose not exist`, status: 404};
    }

    const getRoomType = await roomTypeModel.findById(id).lean().select('-__v').exec();

    if (!getRoomType) {
      throw {message: `Rooms dose not exist`, status: 404};
    }

    return res.status(200).json({message: `Room requested`, data: getRoomType});

  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function deleteRoomType(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Room to edit must be selected`, status: 400 }
    }
    const delRoomType = await roomTypeModel.findByIdAndDelete(id);

    if (delRoomType) {
      return res.status(200).json({ message: `Room Deleted successfully`, data: delRoomType });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
