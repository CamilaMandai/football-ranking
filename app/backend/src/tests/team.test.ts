import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Team from '../database/models/Team';
import TeamService from '../api/services/team.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas de /teams', () => {
  // afterEach(function() {
  //   sinon.restore();
  // })

  // it('teste da camada de service', async () => {
  //   const teams: Team[] = [ 
  //     { id: 1, teamName: 'Avaí/Kindermann' } as Team,
  //     { id: 2, teamName: 'Bahia' } as Team,
  //     { id: 3, teamName: 'Botafogo' } as Team,
  //     { id: 4, teamName: 'Corinthians' } as Team,
  //   ];  
  //   sinon.stub(Model, 'findAll').resolves(teams);
  //   const service = new TeamService();
  //   const result = await service.readAll();

  //   expect(result).to.be.equal(teams);
  
  // });

  it('teste da camada controller rota GET /teams', async() => {
    // const app = new App();
    // const teams = [ 
    //   { teamName: 'Avaí/Kindermann' } as Team,
    //   { teamName: 'Bahia' } as Team,
    //   { teamName: 'Botafogo' } as Team,
    //   { teamName: 'Corinthians' } as Team,
    // ];  
    // sinon.stub(Model, 'findAll').resolves(teams);

    //action
    const response = await chai.request(app).get('/teams');
    //assertion
    expect(response.status).to.be.equal(200);
    //expect(response.body).to.be.deep.equal(teams);
  })

  it('teste da camada controller rota GET /teams/:id', async() => {
    // const app = new App();
    // const teams = [ 
    //   { teamName: 'Avaí/Kindermann' } as Team,
    //   { teamName: 'Bahia' } as Team,
    //   { teamName: 'Botafogo' } as Team,
    //   { teamName: 'Corinthians' } as Team,
    // ];  
    // sinon.stub(Model, 'findAll').resolves(teams);
 //    sinon.stub(Team, 'findAll').resolves(teams);

    //action
    const response = await chai.request(app).get('/teams/1');
    //assertion
    expect(response.status).to.be.equal(200);
    //expect(response.body).to.be.deep.equal(teams);
  })
});
