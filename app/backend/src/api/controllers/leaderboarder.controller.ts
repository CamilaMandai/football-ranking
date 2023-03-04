import { Response, Request } from 'express';
import ILeaderboardService from '../interfaces/ILeaderBoardService';

export default class LeaderboardController {
  private _service: ILeaderboardService;

  constructor(service: ILeaderboardService) {
    this._service = service;
  }

  async calculateStatistic(req: Request, res:Response) {
    const results = await this._service.AllteamStatistic();
    res.status(200).json(results);
  }
}