import { hotelModel, userModel, dataModel } from '../models/index.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config({ path: '.env' });

/**
 *
 * @param {email, phoneNumber, username} req provide required feilds
 * @param {*} res
 */
export async function createHotel(req, res) {
  try {
    // Check for other details at user model
    // to be really worked on IMPORTANT
    const { email, phoneNumber, username } = req.body;

    const checkUser = await userModel
      .findOne({ $or: [{ username }, { email }, { phoneNumber }] });

    if (checkUser) {
      throw { message: `User with detail already exist`, status: 400 };
    }

    const createH = await hotelModel.create({ ...req.body });


    if (createH) {
      const data = createH.toObject();
      delete data.password;
      delete data.__v;

      const mainData = await dataModel.create({ sourceId: data._id, status: 'active' });
      createH.update({ dataId: mainData._id });

      const token = await jwt.sign(createH, process.env.SECRET);
      return res.status(200).json({ message: `Hotel created successfully`, token, data });
    }

  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function createUser(req, res) {
  try {
    // to be really worked on IMPORTANT
    const { email, phoneNumber, username } = req.body;

    console.log(req.body, 'Body sent here');

    const checkUser = await hotelModel
      .findOne({ $or: [{ username }, { email }, { phoneNumber }] });
    console.log(checkUser, `User here`)

    if (checkUser) {
      throw { message: `User with detail already exist`, status: 400 };
    }

    const createU = await userModel.create({ ...req.body });
    console.log(createU, `User created`);

    if (createU) {

      const mainData = await dataModel.create({ sourceId: createU._id, createdBy: req.params.id, status: 'active' });
      console.log(mainData, `Data object here`)
      const userUpdate = await createU.updateOne({ dataId: mainData._id });

      const data = await createU.populate('dataId', '-__v').toObject();
      if (userUpdate) {
        delete data.password;
        delete data.__v;
        console.log(data, `We are here`)
      }
      const token = await jwt.sign(data, process.env.SECRET);

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

    const checkPassword = await bcrypt.compare(password, checkDetail.password);

    if (!checkPassword) {
      throw { message: `Incorrect details provided for login`, status: 400 };
    }

    const data = checkDetail.toObject();
    delete data.password;
    delete data.__v;

    const token = await jwt.sign(checkDetail, process.env.SECRET);

    return res.status(200).json({ message: `Logged in successfully`, data, token });

  } catch (error) {
    console.log(error)
    return res.status(error.status || 500).json({ message: error.message });
  }
}
