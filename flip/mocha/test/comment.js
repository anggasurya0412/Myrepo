// init
const { faker } = require('@faker-js/faker');
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;

const baseUrl = "https://gorest.co.in";
const pathUrl = "/public/v1/comments";
const token = "c1f08bfba77d8701c83ba4953dede5f6b627e9c8eea919f254e55373b98a4c4b"

//scenario test
describe("Create new comment", function(){
    //testcase atau testsuite
    it("Create new comment for the post ID 1128", async function(){
        const resGetResponse = await chai
        .request(baseUrl)
        .get(pathUrl)
        .set("Authorization",`Bearer ${token}`)
        .query({
          post_id : 1128
        })
        .send();
      expect(resGetResponse.status, `Get Response API comment: ${JSON.stringify(resGetResponse.body)}`).to.eql(200);
        
      resEmail = resGetResponse.body.data[0].email
const body = requestBody(1128, resEmail);
      const resCreateComment = await chai
        .request(baseUrl)
        .post(pathUrl)
        .set("Authorization",`Bearer ${token}`)
        .send(body);
        
        expect(resCreateComment.status).to.eql(201);
        expect(resCreateComment.body.data.name).to.eql(body.name);
        expect(resCreateComment.body.data.body).to.eql(body.body);
    })
})

function requestBody(postId, email){
    return {
        post_id : postId,
        name : `${faker.name.firstName()}`,
        email : email,
        body : `${faker.commerce.productDescription()}`
    }
}
