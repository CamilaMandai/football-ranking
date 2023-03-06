import * as express from 'express';
import LeaderBoardService from '../services/leaderboard.service';
import LeaderboardController from '../controllers/leaderboarder.controller';
import LeaderBoardServiceAway from '../services/leaderboardaway.service';
import LeaderBoardControllerAway from '../controllers/leaderboarderaway.controller';

const leaderboardService = new LeaderBoardService();
const leaderboardController = new LeaderboardController(leaderboardService);

const leaderboardServiceAway = new LeaderBoardServiceAway();
const leaderboardControllerAway = new LeaderBoardControllerAway(leaderboardServiceAway);

const router = express.Router();

router.get('/home', (req, res) => leaderboardController.calculateStatistic(req, res));
router.get('/away', (req, res) => leaderboardControllerAway.calculateStatistic(req, res));

export default router;
