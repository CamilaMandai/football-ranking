import { NextFunction, Request, Response } from 'express';

export default async function checkTeams(req: Request, res: Response, next: NextFunction) {
  const { awayTeamId, homeTeamId } = req.body;
  if (awayTeamId === homeTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  return next();
}
