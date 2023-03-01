import * as express from 'express';
// import ITeam from '../interfaces/ITeams';
import IServiceTeam from '../interfaces/ITeamServices';
// import teamService from '../services/team.service';

export default class TeamController {
  private _service: IServiceTeam;

  constructor(service: IServiceTeam) {
    this._service = service;
  }

  async readAll(req: express.Request, res: express.Response) {
    const result = await this._service.findAll();
    return res.status(200).json(result);
  }
}
