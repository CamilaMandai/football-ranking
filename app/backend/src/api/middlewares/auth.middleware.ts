import { Response, Request, NextFunction } from 'express';
import jwtUtils from '../../utils/jwt';

const { decodeToken } = jwtUtils;

const authMiddlewareToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  // console.log(req.headers);

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const user = decodeToken(authorization);
  const currDate = new Date();
  if (!user || user.exp < (currDate.getTime() / 1000)) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  req.body.user = user;

  return next();
};

export default authMiddlewareToken;
