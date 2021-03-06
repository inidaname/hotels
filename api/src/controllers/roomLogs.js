import { roomLogsModel, roomModel, restaurantLogModel, salesLogModel } from '../models';
import { genRandom } from '../utils/helper';

export async function createLogs(req, res){
  try {

    const receipt = genRandom(5);
    const {arrivalDate, departureDate} = req.body;
    req.body.arrivalDate = new Date(arrivalDate.year, arrivalDate.month, arrivalDate.day);
    req.body.departureDate = new Date(departureDate.year, departureDate.month, departureDate.day);
    const roomLogs = await roomLogsModel.create({...req.body, receipt});

    const { room, checkedInStatus } = roomLogs;
    roomModel.findByIdAndUpdate({id: room}, {roomStatus: checkedInStatus}, {new: true});
    
    return res.status(200).json({message: `Room log successfully`, data: roomLogs})

  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function getGuestByRoomNumber(req, res) {
  try {
    const {number} = req.params;
    const getRoom = await roomLogsModel.findOne({$or: [{roomNumber: number}, {customerName: number}, {customerEmail: number}, {customerNumber: number}], checkedInStatus: 'occupied'}).lean().select('-__v').populate('room', '-__v').exec();
    if (!getRoom) {
      throw {message: 'Guest not found', status: 404}
    }

    return res.status(200).json({data: getRoom});
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function getAllRoomLog(_, res) {
  try {
    const roomLogs = await roomLogsModel.find().lean().select('-__v').exec();

    return res.status(200).json({ message: `Product List return`, data: roomLogs });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getRoomLogById(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      throw { message: `Can't find product`, status: 404 };
    }

    const roomLog = await roomLogsModel.findById(id).lean().select('-__v').populate('room', '-__v').exec();

    if (!roomLog) {
      throw { message: `Could not find product`, status: 404 }
    }

    return res.status(200).json({ message: `Product found`, data: roomLog });
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


export async function getRoomLogBill(req, res) {

  try {
    const { id } = req.params;

  
    const [ sales, restaurant ] = await Promise.all([
         salesLogModel.find({roomNumber: id}).exec(),
         restaurantLogModel.find({roomNumber: id}).exec()
    ])

   const data = [ sales = {...sales}, restaurant = { ...restaurant}]
    return res.status(200).json({ message: `Product found`, data  });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

