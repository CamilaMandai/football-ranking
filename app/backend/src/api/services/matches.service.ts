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

  async findById(id: number): Promise<Match | null> {
    const match = await this.model.findByPk(id);
    return match;
  }
}
