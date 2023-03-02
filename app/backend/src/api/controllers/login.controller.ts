import { Response, Request } from 'express';
import ILoginService from '../interfaces/ILoginService';

export default class LoginController {
  private _service: ILoginService;
  private fake = 'not fake';

  constructor(service: ILoginService) {
    this._service = service;
  }

  async validateUser(req: Request, res: Response) {
    const { email, password } = req.body;
    const hash = await this._service.validateUser(email, password);
    if (hash) {
      return res.status(200).json({ token: hash });
    }
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  getRole(req: Request, res: Response): Response {
    const { user } = req.body;
    this.fake = 'fake';
    return res.status(200).json({ role: user.role });
  }
}
