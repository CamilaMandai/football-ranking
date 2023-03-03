import * as _jsonwebtoken from 'jsonwebtoken';
// import IUser from '../api/interfaces/IUser';
import User from '../database/models/User';

const jwt = <any>_jsonwebtoken;

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';

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
  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    // console.log('deu ruim');
    return null;
  }
};

export default {
  generateToken,
  decodeToken,
};
