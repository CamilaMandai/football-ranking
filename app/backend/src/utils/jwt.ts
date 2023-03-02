import * as _jsonwebtoken from 'jsonwebtoken';
// import IUser from '../api/interfaces/IUser';
import User from '../database/models/User';

const jwt = <any>_jsonwebtoken;

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secretJWT';

const jwtConfig = {
  // expiresIn: '1m',
  algorithm: 'HS256',
};

const generateToken = (payload: User) => {
  try {
    return jwt.sign(payload.dataValues, TOKEN_SECRET, jwtConfig);
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

const decodeToken = (token: string) => {
  if (!token) {
    throw new Error('Undefined Token');
  }

  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default {
  generateToken,
  decodeToken,
};