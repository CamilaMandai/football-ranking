import Match from '../../database/models/Match';

export default interface IMatchesService {
  findAll(): Promise<Match[]>;
  findByProgress(progress: string): Promise<Match[]>;
  finishMatch(id: number): Promise<string>;
  // findById(id:number): Promise<Match | null>;
}
