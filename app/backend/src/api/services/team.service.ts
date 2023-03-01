import { ModelStatic } from 'sequelize';
import Team from '../../database/models/Team';
// import ITeam from '../interfaces/ITeams';
import IServiceTeam from '../interfaces/ITeamServices';

export default class TeamService implements IServiceTeam {
  protected model: ModelStatic<Team> = Team;

  // create(dto: ITeam): Promise<Team> {
  //   throw new Error('Method not implemented.');
  // }

  async findAll(): Promise<Team[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}
