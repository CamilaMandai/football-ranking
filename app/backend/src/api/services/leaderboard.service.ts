import { ModelStatic } from 'sequelize';
import Match from '../../database/models/Match';
import Team from '../../database/models/Team';
import ITeamStatistic from '../interfaces/ITeamStatistic';

export default class LeaderBoardService {
  protected model: ModelStatic<Match> = Match;
  protected teamModel: ModelStatic<Team> = Team;
  private fake = 'fake';

  calculatePoints(matches: Match[]) {
    this.fake = 'not fake';
    const result = matches.reduce(
      (acc, curr) => {
        if (curr.homeTeamGoals > curr.awayTeamGoals) {
          acc.tV += 1; acc.tP += 3;
        }
        if (curr.homeTeamGoals === curr.awayTeamGoals) {
          acc.tD += 1; acc.tP += 1;
        }
        if (curr.homeTeamGoals < curr.awayTeamGoals) acc.tL += 1;
        acc.gF += curr.homeTeamGoals;
        acc.gO += curr.awayTeamGoals;
        acc.tG += 1;
        return acc;
      },
      { tP: 0, tG: 0, tV: 0, tD: 0, tL: 0, gF: 0, gO: 0 },
    );
    return result;
  }

  async teamStatistic(id: number): Promise<ITeamStatistic> {
    const team = await this.teamModel.findOne({ where: { id }, attributes: { exclude: ['id'] } });
    const matches = await this.model.findAll({
      where: { homeTeamId: id, inProgress: false }, raw: true });
    const points = this.calculatePoints(matches);
    const { tP, tG, tV, tD, tL, gF, gO } = points;
    const result = {
      name: team?.teamName,
      totalPoints: tP,
      totalGames: tG,
      totalVictories: tV,
      totalDraws: tD,
      totalLosses: tL,
      goalsFavor: gF,
      goalsOwn: gO,
      goalsBalance: gF - gO,
      efficiency: ((tP / (tG * 3)) * 100).toFixed(2),
    };
    return result;
  }

  async AllteamStatistic(): Promise<ITeamStatistic[]> {
    const allTeams = await this.teamModel.findAll({ raw: true });
    const promises = allTeams.map((team) => this.teamStatistic(team.id));
    const results = await Promise.all(promises);
    return results.sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
      if (b.totalVictories !== a.totalVictories) return b.totalVictories - a.totalVictories;
      if (b.goalsBalance !== a.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (b.goalsFavor !== a.goalsFavor) return b.goalsFavor - a.goalsFavor;
      return b.goalsOwn - a.goalsOwn;
    });
    // return results;
  }
}
