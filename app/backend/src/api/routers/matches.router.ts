import * as express from 'express';
import authorization from '../middlewares/auth.middleware';
import MatchesController from '../controllers/matches.controller';

const router = express.Router();
const matchesController = new MatchesController();

router.get('/', authorization, (req, res) => matchesController.findAll(req, res));

export default router;
