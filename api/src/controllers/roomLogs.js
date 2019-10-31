import { roomLogsModel } from '../models/index.js';

export async function createLogs(req, res){
  try {
    const roomLogs = await roomLogsModel.create({...req.body});

    if (roomLogs) {
      return res.status(200).json({message: `Room log successfully`, data: roomLogs})
    }
  } catch (error) {
    return res.status(error.status).json({message: error.message});
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

    const updateRoom = await roomLogsModel.findByIdAndUpdate(id, updates, { new: true }).lean();

    if (updateRoom) {
      return res.status(200).json({ message: `Room updated successfully`, data: updateRoom });
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function deleteRoom(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Room to delete must be selected`, status: 400 }
    }
    const toDelete = await roomLogsModel.findByIdAndDelete(id);

    if (toDelete) {
      return res.status(200).json({ message: `Room Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}
