import ITeamStatistic from './ITeamStatistic';
import Match from '../../database/models/Match';

export default interface ILeaderboardService {
  calculatePoints(matches: Match[]): { tP: number;
    tG: number,
    tV: number,
    tD: number,
    tL: number,
    gF: number,
    gO: number,
  };
  teamStatistic(id: number): Promise<ITeamStatistic>
  AllteamStatistic(): Promise<ITeamStatistic[]>
}
