import * as express from 'express';
import ITeamController from '../interfaces/ITeamController';
// import ITeam from '../interfaces/ITeams';
import IServiceTeam from '../interfaces/ITeamServices';
// import teamService from '../services/team.service';

export default class TeamController implements ITeamController {
  private _service: IServiceTeam;

  constructor(service: IServiceTeam) {
    this._service = service;
  }

  async findAll(_req: express.Request, res: express.Response) {
    const result = await this._service.findAll();
    return res.status(200).json(result);
  }

  async findById(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const team = await this._service.findById(Number(id));
    return res.status(200).json(team);
  }
}
