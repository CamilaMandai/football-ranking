import * as express from 'express';
import LeaderBoardService from '../services/leaderboard.service';
import LeaderboardController from '../controllers/leaderboarder.controller';

const leaderboardService = new LeaderBoardService();
const leaderboardController = new LeaderboardController(leaderboardService);

const router = express.Router();

router.get('/home', (req, res) => leaderboardController.calculateStatistic(req, res));

export default router;