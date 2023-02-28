import Team from '../database/models/Team';

const findAll = async () => {
  const teams = await Team.findAll();
  return teams;
};

export default {
  findAll,
}
