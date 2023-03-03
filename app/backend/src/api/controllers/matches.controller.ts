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
}
