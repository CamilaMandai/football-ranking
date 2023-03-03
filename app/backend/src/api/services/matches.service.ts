import { ModelStatic } from 'sequelize';
import Team from '../../database/models/Team';
import Match from '../../database/models/Match';
import IMatchesService from '../interfaces/IMatchesService';

export default class MatchService implements IMatchesService {
  protected model: ModelStatic<Match> = Match;

  async findAll(): Promise<Match[]> {
    const matches = await this.model.findAll({
      include: [{
        model: Team,
        as: 'homeTeam',
        attributes: { exclude: ['id'] },
      }, {
        model: Team,
        as: 'awayTeam',
        attributes: { exclude: ['id'] },
      }],
    });
    return matches;
  }

  async findByProgress(progress: string): Promise<Match[]> {
    const inProgress = progress === 'true';
    const matches = await this.model.findAll(
      {
        where: { inProgress },
        include: [{
          model: Team,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        }, {
          model: Team,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        }],
      },
    );
    return matches;
  }

  async finishMatch(id: number): Promise<string> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return 'Finished';
  }

  async updateMatchScore(id: number, score: { homeTeamGoals: string, awayTeamGoals: string })
    : Promise<null> {
    const { homeTeamGoals, awayTeamGoals } = score;
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return null;
  }

  async createMatch(match: Match): Promise<Match> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = match;
    const newMatch = await this.model.create({
      homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress: true });
    return newMatch;
  }
}
