import * as sinon from 'sinon';
import * as chai from 'chai';
import jwtUtils from '../utils/jwt';


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

  it('teste da rota post /login com password menor que 6', async() => {
    const user = 
      {
        email: "user@gmail.com",
        id: 1,
        password: "$2a$10$Sapoi0qkzFitwcsE1avkLuSgZhjC0SXOd6JJ5n5NvMwhb56uLRsua",
        role: "admin",
        username: "Admin",
      } as User;
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ1c2VyIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkU2Fwb2kwcWt6Rml0d2NzRTFhdmtMdVNnWmhqQzBTWE9kNkpKNW41TnZNd2hiNTZ1TFJzdWEiLCJpYXQiOjE2Nzc3OTQ1NjJ9.DvpLrdxeymgsD5uiA8t1I9Nz5lYv9sRWnr_CwPGk8G8'

    sinon.stub(User, 'findOne').resolves(user);
    sinon.stub(jwtUtils, 'generateToken').resolves(token);
  
    const userLogin = {
      email: 'user@gmail.com',
      senha: 'baconzitos',
    }

    //action
    const response = await chai.request(app).post('/login').send(userLogin);
    //assertion
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.equal({token});
  })
});