import Team from '../../database/models/Team';

export default interface IServiceTeam {
  // create(dto: ITeam): Promise<Team>
  findAll(): Promise<Team[]>;
}
