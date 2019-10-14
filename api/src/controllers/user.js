import { userModel } from '../models/index.js';
import bcrypt from 'bcryptjs';

export async function createUser(req, res) {
    try {
        const createU = await userModel.create({ ...req.body });
        if (createU) {
            return res.status(200).json({ data: createU });
        }
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const findUser = await userModel.findOne({ email });

        if (!email || !password) {
            throw { message: `Please provide login details`, status: 401 }
        }

        if (!findUser) {
            throw { message: `Invalid login details`, status: 401 }
        }

        const checkPassword = await bcrypt.compare(password, findUser.password);

        if (!checkPassword) {
            throw { message: `Invalid login details`, status: 401 }
        }

        return res.status(200).json({ message: `Log in successfully`, data: findUser });
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
}

export async function getUserById(req, res) {
    try {
        const { id } = req.params

        if (!id) {
            throw { message: `User was not found`, status: 404 }
        }

        const findUser = await userModel.findById(id).lean().populate('-password -__v').exec();

        if (!findUser) {
            throw { message: `User was not found`, status: 404 }
        }

        return res.status(200).json({ message: `User found`, data: findUser });
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            throw { message: `Please provide user to update`, status: 402 }
        }

        let options = req.body;
        const updates = {};

        for (const option of Object.keys(options)) {
            updates[option] = options[option];
        }

        delete updates.password

        if (!updates) {
            throw { message: `Please provide data to update`, status: 400 }
        }

        const checkUser = await userModel.findByIdAndUpdate(id, updates, { new: true }).lean().select('-__v').exec();

        if (!checkUser) {
            throw { message: `User does not exist`, status: 404 }
        }

        return res.status(201).json({ message: `Data updated successfully`, data: checkUser });
        // @TODO: to implement more logic

    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
}

export async function changePassword(req, res) {
    try {
        const {currentPassword, newPassword} = req.body;

        const {id} = req.params;

        if (!currentPassword || !newPassword || !id) {
            throw {message: `Provide details for change of Password`, status: 401}
        }

        const getUser = await userModel.findById(id).lean();

        if (!getUser) {
            throw {message: `User does not exist`, status: 404}
        }

        const checkPassword = await bcrypt.compare(currentPassword, getUser.password);

        if (!checkPassword) {
            throw {message: `Current password incurrent`, status: 400}
        }

        const hashPassword = await bcrypt.hash(newPassword, 10);

        if (!hashPassword) {
            throw {message: `Error while saving your password`, status: 500}
        }

        const updatePassword = await userModel.findByIdAndUpdate(id, {password: hashPassword}, {new: true}).lean().select('-password -__v').exec();

        return res.status(200).json({message: `Password changed successfully`, data: updatePassword});
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message})
    }
}