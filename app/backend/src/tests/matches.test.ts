import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas de /matches', () => {
    it('teste da camada controller rota GET /teams', async() => {

    const response = await chai.request(app).get('/matches');
    //assertion
    expect(response.status).to.be.equal(200);
    //expect(response.body).to.be.deep.equal(teams);
  })

  it('teste da camada controller rota GET /teams', async() => {

    const response = await chai.request(app).get('/matches?inProgress=true');
    //assertion
    expect(response.status).to.be.equal(200);
    //expect(response.body).to.be.deep.equal(teams);
  })
//   it('teste da camada controller rota GET /teams/:id', async() => {
//     // const app = new App();
//     // const teams = [ 
//     //   { teamName: 'Avaí/Kindermann' } as Team,
//     //   { teamName: 'Bahia' } as Team,
//     //   { teamName: 'Botafogo' } as Team,
//     //   { teamName: 'Corinthians' } as Team,
//     // ];  
//     // sinon.stub(Model, 'findAll').resolves(teams);
//  //    sinon.stub(Team, 'findAll').resolves(teams);

//     //action
//     const response = await chai.request(app).get('/teams/1');
//     //assertion
//     expect(response.status).to.be.equal(200);
//     //expect(response.body).to.be.deep.equal(teams);
//   })
});
