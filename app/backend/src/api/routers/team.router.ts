import * as express from 'express';
import TeamController from '../controllers/team.controller';
import TeamService from '../services/team.service';

const router = express.Router();
const teamService = new TeamService();
const teamController = new TeamController(teamService);

router.get('/', (req, res) => teamController.findAll(req, res));
// router.get('/', (req, res) => res.status(200).json(teamController.findAll()));
export default router;
