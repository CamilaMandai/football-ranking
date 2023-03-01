import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';

import Team from '../database/models/Team';
import TeamService from '../api/services/team.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas de /teams', () => {
  afterEach(function() {
    sinon.restore();
  })

  it('teste da camada de service', async () => {
    const teams: Team[] = [ 
      new Team({ teamName: 'Avaí/Kindermann' }),
      new Team({ teamName: 'Bahia' }),
      new Team({ teamName: 'Botafogo' }),
      new Team({ teamName: 'Corinthians' }),
    ];  
    sinon.stub(Model, 'findAll').resolves(teams);
    const service = new TeamService();
    const result = await service.readAll();

    expect(result).to.be.equal(teams);
  
  });

  it('teste da camada controller', async() => {
    const app = new App();
    const teams = [ 
      { teamName: 'Avaí/Kindermann' },
      { teamName: 'Bahia' },
      { teamName: 'Botafogo' },
      { teamName: 'Corinthians' },
    ] as Team[];  
    sinon.stub(Model, 'findAll').resolves(teams);

    //action
    const response = await chai.request(app.app).get('/teams').send(teams);
    //assertion
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(teams);
  })
});
