const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect
const { faker } = require('@faker-js/faker');
const config = require('../config.json')
const baseUrl = config.baseUrl
const pathUrl = '/api/users'

describe('Pengujian API', function () {
  const bodyRequest = requestBody();
    it('Create user with valid data should success', async function () {
    const res = await chai
    .request(baseUrl)
    .post(pathUrl)
    .send(bodyRequest);
    
    expect(res.status, `Create User: ${JSON.stringify(res.body)}`).to.eql(201);
    expect(res.body.name).to.eql(bodyRequest.name);
    expect(res.body.job).to.eql(bodyRequest.job);
    });

    it('Update user with valid data should success', async function () {
      const res = await chai
      .request(baseUrl)
      .put(pathUrl+'/2')
      .send(bodyRequest);

      expect(res.status).to.eql(200);
      expect(res.body.name).to.eql(bodyRequest.name);
      expect(res.body.job).to.eql(bodyRequest.job);
      });

      it('Delete user with valid id should success', async function () {
        const res = await chai
        .request(baseUrl)
        .delete(pathUrl+'/2')
        .send();
  
        expect(res.status).to.eql(204);
        });
  });

  function requestBody(){
    const body = {
      name: `${faker.person.firstName()}`,
      job: `${faker.commerce.productName()}`  
    }
    return body
  }