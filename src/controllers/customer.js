import { customer, userModel } from '../models';

export async function createCustomer (req, res) {
    try {
        const {email, phoneNumber} = req.body;
        let existingUser;

        if (phoneNumber) {
            const UserWithPhon = await customer
                .findOne({phoneNumber})
                .lean().select('-__v')
                .populate('userId', '-password -__v')
                .populate('previousRooms', '-__v')
                .populate('room', '-__v')
                .exec();
            if (UserWithPhon){
                return res.status(200).json({message: `Returning existing user`, data: UserWithPhon})
            }
        }

        if (email) {
            const checkUser = await userModel.findOne({email: email});

            if (!checkUser) {
                function makePassword(length) {
                    var result           = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                       result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                 }
                 
                 const password = makePassword(8);
                 
                 existingUser = await userModel.create({email, password});
            } else {
                existingUser = checkUser;
            }
        }

        if (existingUser) {
            req.body.userId = existingUser._id;
        }

        const create = await customer.create({...req.body});

        if (create) {
            const userData = create
                    .populate('-__v')
                    .populate('userId', '-password -__v')
                    .populate('rooms', '-__v');
            return res.status(200).json({message: `New Customer created`, data: userData})
        }

    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function getCustomer (req, res) {
    try {
        const {customerData} = req.body;

        const findCustomer = await customer
                    .findOne({$or: [{email: customerData}, {phoneNumber: customerData}]})
                    .lean()
                    .select('-__v')
                    .populate('userId', '-__v -password')
                    .populate('rooms', '-__v')
                    .exec();

        if (!findCustomer) {
            throw {message: `Customer does not exist`, status: 404};
        }

        return res.status(200).json({message: `Customer found`, data: findCustomer});
    } catch (error) {
        return res.status(error.status || 500).json({message: error.message});
    }
}

export async function updateCustomer (req, res) {
    try {
        const {id} = req.params;

        if (!id) {
            throw {message: `Please provide customer to update`, status: 402}
        }

		let options = req.body;
		const updates = {};

		for (const option of Object.keys(options)) {
			updates[option] = options[option];
        }
        
        if (!updates) {
            throw {message: `Please provide data to update`, status: 400}
        }

        const checkUser = await customer.findByIdAndUpdate(id, updates, {new: true})
                .lean().select('-__v')
                .populate('userId', '-__v -password')
                .populate('rooms', '-__v')
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