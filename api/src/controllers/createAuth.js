import {  userModel } from '../models';
import { newToken } from '../utils/auth.js'


/**
 *
 * @param {email, phoneNumber, username} req provide required feilds
 * @param {*} res
 */

export async function createNewUser(req, res) {
  try {
    
    const { email, phoneNumber, username } = req.body;
    
    const createUser = await userModel.create({ ...req.body });

    if (createUser) {

      const data = await createUser.toObject();
     
        delete data.password;
        delete data.__v;
      
      const token = newToken(createUser)

      return res.status(200).json({ message: `User created successfully`, token, data });
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { password, username } = req.body;

    if (!password || !username) {
      throw { message: `Please provide all required details for login`, status: 401 };
    }

    const checkDetail = await userModel
      .findOne({ $or: [{ username }, { email: username }, { phoneNumber: username }] });

    if (!checkDetail) {
      throw { message: `Incorrect details provided for login`, status: 400 };
    }

    const match = await checkDetail.checkPassword(password);
          if (!match) {
            throw { message: `Incorrect details provided for login`, status: 400 };
          }
    
    const token = newToken(checkDetail)

    const data = checkDetail.toObject();
    delete data.password;
    delete data.__v;

    

    return res.status(200).json({ message: `Logged in successfully`, data, token });

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

