const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect
const config = require('../config.json')
const pathUrl = '/v3.1/name/'

describe('API Search by country', function () {
    it('get country using full country name', async function () {
    const name = 'indonesia';
    const res = await chai
    .request(config.baseUrl)
    .get(pathUrl+`${name}`)
    .send();
    expect(res.status).to.eql(200);
    });

    it('get country using alphabet', async function () {
      const name = 'c';
      const res = await chai
      .request(config.baseUrl)
      .get(pathUrl+`${name}`)
      .send();
      expect(res.status).to.eql(200);
      });


    it('get country using unknown country', async function () {
      const name = '12ds';
      const res = await chai
      .request(config.baseUrl)
      .get(pathUrl+`${name}`)
      .send();
      expect(res.status).to.eql(404);
      });
  });