import { Response, Request } from 'express';
import IMatchesService from '../interfaces/IMatchesService';

export default class MatchesController {
  private _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    if (inProgress) {
      return this.findByProgress(req, res);
    }
    const matches = await this._service.findAll();
    return res.status(200).json(matches);
  }

  async findByProgress(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    const matches = await this._service.findByProgress(String(inProgress));
    return res.status(200).json(matches);
  }

  async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const message = await this._service.finishMatch(Number(id));
    return res.status(200).json({ message });
  }

  async updateMatchScore(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._service.updateMatchScore(Number(id), { homeTeamGoals, awayTeamGoals });
    return res.status(200).json({ message: 'score atualizado' });
  }

  async createMatch(req: Request, res: Response): Promise<Response> {
    const newMatch = req.body;
    const { homeTeamId, awayTeamId } = newMatch;
    const isHomeTeamRegistered = await this._service.isRegistered(Number(homeTeamId));
    const isAwayTeamRegistered = await this._service.isRegistered(Number(awayTeamId));
    if (!isHomeTeamRegistered || !isAwayTeamRegistered) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    const addedUser = await this._service.createMatch(newMatch);
    return res.status(201).json(addedUser);
  }
}
