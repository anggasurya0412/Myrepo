const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const { faker } = require('@faker-js/faker');
const config = require('../config.json');
const baseUrl = config.baseUrl;
const pathUrl = '/processOrder/order';
const bodyRequest = requestBody();

describe('API Order', function () {
    it('Send Order with status new without special order should success', async function () {
    const res = await chai
    .request(baseUrl)
    .post(pathUrl)
    .send(bodyRequest);
    console.log(bodyRequest, '\n', res.body)

    expect(res.status, `Send New Order: ${JSON.stringify(res.body)}`).to.eql(201);
    expect(res.body.order_status).to.eql(bodyRequest.order_status);
    expect(res.body.last_update_timestamp).to.eql(bodyRequest.last_update_timestamp);
    expect(res.body.special_order).to.eql(bodyRequest.special_order);
    });

    it('Send Order with status new and with special order true should success', async function () {
      bodyRequest.special_order = true;
      const res = await chai
      .request(baseUrl)
      .post(pathUrl)
      .send(bodyRequest);
      console.log(bodyRequest, '\n', res.body)
  
      expect(res.status, `Send New Order: ${JSON.stringify(res.body)}`).to.eql(201);
      expect(res.body.order_status).to.eql(bodyRequest.order_status);
      expect(res.body.last_update_timestamp).to.eql(bodyRequest.last_update_timestamp);
      expect(res.body.special_order).to.eql(bodyRequest.special_order);
      });

  });

  function requestBody(){
    const date = Date.now();
    const body = {
      order_description: `${faker.commerce.productName()}`,
      order_status: "New",
      last_update_timestamp: date,
      special_order: false
    }
    return body
  }