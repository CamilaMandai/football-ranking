import { Response, Request } from 'express';
import IMatchesService from '../interfaces/IMatchesService';

export default class MatchesController {
  private _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const matches = await this._service.findAll();
    return res.status(200).json(matches);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const match = await this._service.findById(Number(id));
    if (match) {
      return res.status(200).json(match);
    }
    return res.status(400).json({ message: 'not found' });
  }
}
