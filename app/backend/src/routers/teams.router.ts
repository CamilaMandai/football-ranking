import express from 'express';
import teamsController from '../controllers/team.controller';

const router = express.Router();

router.get('/', teamsController.findAll);

export default router;
