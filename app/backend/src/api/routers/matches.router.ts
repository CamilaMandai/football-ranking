import * as express from 'express';
// import authorization from '../middlewares/auth.middleware';
import MatchesController from '../controllers/matches.controller';
import MatchesService from '../services/matches.service';

const router = express.Router();
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

// router.get('/', (req, res) => matchesController.findByProgress(req, res));
router.get('/', (req, res) => matchesController.findAll(req, res));

export default router;
