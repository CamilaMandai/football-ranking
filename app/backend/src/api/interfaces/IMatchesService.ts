import Match from '../../database/models/Match';

export default interface IMatchesService {
  findAll(): Promise<Match[]>;
  findById(id:number): Promise<Match | null>;
}
