import * as express from 'express';
import authorization from '../middlewares/auth.middleware';
import LoginController from '../controllers/login.controller';
import LoginService from '../services/login.service';
import validateFields from '../middlewares/login.middleware';

const router = express.Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);
router.post('/', validateFields, (req, res) => loginController.validateUser(req, res));
router.get('/role', authorization, (req, res) => loginController.getRole(req, res));
export default router;
