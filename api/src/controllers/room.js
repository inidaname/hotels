import { roomModel } from '../models/index.js';

export async function createRoom(req, res) {
  try {
    // @TODO: user log activities implement here
    const newRoom = await roomModel.create({ ...req.body });
    if (newRoom) {
      return res.status(200).json({ message: `Room created successfully`, data: newRoom });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function editRoom(req, res) {
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

    const updateRoom = await roomModel.findByIdAndUpdate(id, updates, { new: true }).lean();

    if (updateRoom) {
      return res.status(200).json({ message: `Room updated successfully`, data: updateRoom });
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
 
export async function getAllRooms(req, res) {
  try {
    const getRooms = await roomModel.find().lean().select('-__v').populate('roomTypeId', '-__v').exec();
   

    return res.status(200).json({message: `List of all rooms`, data: getRooms});
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function getRoomById(req, res) {
  try {
    const {id} = req.params;

    if (!id) {
      throw {message: `Rooms dose not exist`, status: 404};
    }

    const getRoom = await roomModel.findById(id).lean().select('-__v').populate('roomTypeId', '-__v').exec();

    if (!getRoom) {
      throw {message: `Rooms dose not exist`, status: 404};
    }

    return res.status(200).json({message: `Room requested`, data: getRoom});

  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function deleteRoom(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Room to edit must be selected`, status: 400 }
    }
    const toDelete = await roomModel.findByIdAndDelete(id);

    if (toDelete) {
      return res.status(200).json({ message: `Room Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
