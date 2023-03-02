export default interface ILoginService {
  validateUser(email: string, password: string): Promise<string | null>;
}
