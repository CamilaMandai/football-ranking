import { Request, Response } from 'express';
import teamService from '../services/team.service';

const findAll = async (req : Request, res : Response) : Promise<Response> => {
  const teams = await teamService.findAll();
  return res.status(200).json(teams);
};

export default {
  findAll,
};
