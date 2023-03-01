import * as express from 'express';

export default interface ITeamController {
  // create(dto: ITeam): Promise<Team>
  findAll(
    req: express.Request,
    res: express.Response): Promise<express.Response<any, Record<string, any>>>;
}
