import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import LoginService from '../api/services/login.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas de /login', () => {
  // afterEach(function() {
  //   sinon.restore();
  // })

  it('teste da camada controller rota POST /login', async() => {
    const token = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
    }
    sinon.stub(LoginService, 'validateUser').resolves(token);
    const user = {
      email: 'user@email.com',
      senha: 12345,
    }

    //action
    const response = await chai.request(app).post('/login').send(user);
    //assertion
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(token);
  })
});