import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import LeaderboardService from '../api/services/leaderboard.service';
import ITeamStatistic from '../api/interfaces/ITeamStatistic';
// import matches from '../../../../__tests__/expected_results/matches';
// import teams from '../../../../__tests__/expected_results/teams';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas de /leaderboard', () => {

  it('teste da rota GET /leaderboard/home', async() => {
    const expectedResult = [
      {
        name: 'Santos',
        totalPoints: 9,
        totalGames: 3,
        totalVictories: 3,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 9,
        goalsOwn: 3,
        goalsBalance: 6,
        efficiency: '100.00'
      },
      {
        name: 'Palmeiras',
        totalPoints: 7,
        totalGames: 3,
        totalVictories: 2,
        totalDraws: 1,
        totalLosses: 0,
        goalsFavor: 10,
        goalsOwn: 5,
        goalsBalance: 5,
        efficiency: '77.78'
      },
      {
        name: 'Corinthians',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 6,
        goalsOwn: 1,
        goalsBalance: 5,
        efficiency: '100.00'
      }] as ITeamStatistic[];
    const leaderboardService = new LeaderboardService();
    
    //arrange
    sinon.stub(leaderboardService, 'AllteamStatistic').resolves(expectedResult);

    //action
    const response = await chai.request(app).get('/leaderboard/home');
    //assertion
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(expectedResult);
  })

 
});
