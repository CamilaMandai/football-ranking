import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import User from '../../database/models/User';
import ILoginService from '../interfaces/ILoginService';
import jwtUtils from '../../utils/jwt';

export default class LoginService implements ILoginService {
  protected model: ModelStatic<User> = User;

  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await this.model.findOne({
      where: { email },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwtUtils.generateToken(user);
      return token;
    }
    return null;
  }
}
