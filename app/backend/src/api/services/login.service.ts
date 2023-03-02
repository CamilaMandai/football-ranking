import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import User from '../../database/models/User';
import ILoginService from '../interfaces/ILoginService';

export default class LoginService implements ILoginService {
  protected model: ModelStatic<User> = User;

  async validateUser(email: string, password: string): Promise<string | null> {
    const allUsers = await this.model.findAll();
    const validUser = allUsers.find((user) =>
      user.email === email && bcrypt.compareSync(password, user.password));
    if (validUser) {
      const saltRounds = 10;
      const myPlaintextPassword = password;
      const token = await bcrypt.hash(myPlaintextPassword, saltRounds);
      return token;
    }
    return null;
  }
}
