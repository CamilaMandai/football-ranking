import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';
import IUser from '../api/interfaces/IUser';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import User from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas de /login', () => {
  // afterEach(function() {
  //   sinon.restore();
  // })

  it('teste da rota post /login com password menor que 6', async() => {
    // const token = {
    //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
    // }
    // sinon.stub(LoginService, 'validateUser').resolves(token);
    // const users = [
    //   {
    //     email: "admin@admin.com",
    //     id: 1,
    //     password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
    //     role: "admin",
    //     username: "Admin",
    //   },
    //   {
    //     email: "user@user.com",
    //     id: 2,
    //     password: "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO",
    //     role: "user",
    //     username: "User",
    //   }
    // ] as IUser[];
    // sinon.stub(Model, 'findAll').resolves(users));
    // stub do bcrypt retornando true
    const user = {
      email: 'user@email.com',
      senha: 12346,
    }

    //action
    const response = await chai.request(app).post('/login').send(user);
    //assertion
    expect(response.status).to.be.equal(400);

  })
  it('teste da rota post /login com password menor que 6', async() => {
    const user = {
      email: '@email.com',
      senha: 12346,
    }

    //action
    const response = await chai.request(app).post('/login').send(user);
    //assertion
    expect(response.status).to.be.equal(400);

  })
});