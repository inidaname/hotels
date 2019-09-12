import { userModel } from '../models';

export async function createUser (req, res){
    try {
        const createU = await userModel.create({...req.body});
        if (createU) {
            return res.status(200).json({data: createU});
        }
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}