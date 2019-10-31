import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

export async function createToken(payload) {
  const token = await jwt.sign(payload, process.env.SECRET);

  return token;
}
