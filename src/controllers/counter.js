import {counterModel, userModel} from '../models/index.js';

export async function createCounter (req, res){
    try {
        const {id} = req.params;

        if (!id) {
            throw {message: `User must be specified`, status: 404};
        }

        const findUser = await userModel.findById(id).lean().populate('-password, -__v').exec();
        
        if(!findUser){
            throw {message: `User does not exist`, status: 404};
        }

        req.body.userId = id;
        const create = await counterModel.create({...req.body});

        if (create) {
            const userObj = create.populate('userId', '-password -__v').lean();
            return res.status(200).json({message: `Counter created successfully`, data: userObj});
        }
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function getCounterById (req, res) {
    try {
        const {id} = req.params;
        
        if(!id){
            throw {message: `Please provide required data`, status: 401};
        }

        const findCounter = await counterModel.findById(id).lean().select('-__v').populate('userId', '-password -__v').exec();

        if (!findCounter) {
            throw {message: `User does not exist`, status: 404};
        }

        return res.status(200).json({message: `User found`, data: findCounter})
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function getCounterByUserId (req, res) {
    try {
        const {id} = req.params;

        if(!id){
            throw {message: `Please provide required data`, status: 401};
        }

        const findCounter = await counterModel.findOne({userId: id}).lean().select('-__v').populate('userId', '-password -__v').exec();

        if (!findCounter) {
            throw {message: `User does not exist`, status: 404};
        }

        return res.status(200).json({message: `User found`, data: findCounter})

    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function updateData (req, res) {
    try {
        const {id} = req.params;

        if (!id) {
            throw {message: `Please provide user to update`, status: 402}
        }

		let options = req.body;
		const updates = {};

		for (const option of Object.keys(options)) {
			updates[option] = options[option];
        }
        
        if (!updates) {
            throw {message: `Please provide data to update`, status: 400}
        }

        const checkUser = await counterModel.findByIdAndUpdate(id, updates, {new: true}).lean().select('-__v').populate('userId', '-password -__v').exec();

        if (!checkUser) {
            throw {message: `User does not exist`, status: 404}
        }

        return res.status(201).json({message: `Data updated successfully`, data: checkUser});
        // @TODO: to implement more logic

    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}