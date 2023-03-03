import Match from '../../database/models/Match';

export default interface IMatchesService {
  findAll(): Promise<Match[]>;
  findByProgress(progress: string): Promise<Match[]>;
  finishMatch(id: number): Promise<string>;
  updateMatchScore(id: number, score: { homeTeamGoals: string, awayTeamGoals: string })
  : Promise<null>
  createMatch(match: Match): Promise<Match>;
  // findById(id:number): Promise<Match | null>;
}
