import { roomsModel } from '../models';


export async function createRoom (req, res) {
    try {
        const create = await roomsModel.create({...req.body});

        if (create) {
            const roomData = create.toObject();
            return res.status(200).json({message: `Room created successfully`, data: roomData});
        }
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function getAllRooms (req, res) {
    try {
        const getAll = await roomsModel.find().lean().select('-__v').populate('occupant', '-__v').exec();

        return res.status(200).json({message: `List of all rooms`, data: getAll});
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function getRoomByNumber (req, res) {
    try {
        const {roomNumber} = req.body;
        
        if (!roomNumber || typeof roomNumber !== Number) {
            throw {message: `Please provide a room number`, status: 400}
        }

        const findRoom = await roomsModel.findOne({roomNumber}).lean().select('-__v').populate('occupant', '-__v').exec();

        if (!findRoom) {
            throw {message: `Room does not exist`, status: 404}
        }

        return res.status(200).json({message: `Room detail`, data: findRoom});
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function getRoomByName (req, res) {
    try {
        const {roomName} = req.body;
        
        if (!roomName) {
            throw {message: `Please provide a room Name`, status: 400}
        }

        const findRoom = await roomsModel.findOne({roomName}).lean().select('-__v').populate('occupant', '-__v').exec();

        if (!findRoom) {
            throw {message: `Room does not exist`, status: 404}
        }

        return res.status(200).json({message: `Room detail`, data: findRoom});
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function updateRoom (req, res) {
    try {
        const {id} = req.params;

        if (!id) {
            throw {message: `Please provide room to update`, status: 402}
        }

		let options = req.body;
		const updates = {};

		for (const option of Object.keys(options)) {
			updates[option] = options[option];
        }
        
        if (!updates) {
            throw {message: `Please provide data to update`, status: 400}
        }

        const checkUser = await roomsModel.findByIdAndUpdate(id, updates, {new: true})
                .lean().select('-__v')
                .populate('occupant', '-__v')
                .exec();

        if (!checkUser) {
            throw {message: `Room does not exist`, status: 404}
        }

        return res.status(201).json({message: `Data updated successfully`, data: checkUser});
        // @TODO: to implement more logic

    } catch (error) {
        return res.status(error.status).json({message: error.message});
    }
}