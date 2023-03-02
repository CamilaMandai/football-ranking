import { NextFunction, Request, Response } from 'express';

export default function checkEmailPassword(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const regEmail = /^\w+@[a-zA-Z_]+?/;
  if (!regEmail.test(email)) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  return next();
}
