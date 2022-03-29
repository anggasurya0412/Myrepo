// init
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const collect = require('collect.js');

const baseUrl = "https://gorest.co.in";
const pathUrl = "/public/v1/todos";
const token = "c1f08bfba77d8701c83ba4953dede5f6b627e9c8eea919f254e55373b98a4c4b"

//scenario test
describe("Get todos", function(){
    //testcase atau testsuite
    it("Get `todos` with title containing the word “credo” and “status” is completed", async function(){
        const res = await chai
        .request(baseUrl)
        .get(pathUrl)
        .set("Authorization",`Bearer ${token}`)
        .query({
          status : "completed",
          title : "credo"
        })
        .send();

        const data = collect(res.body.data)
        const totalData = data.count();

      expect(res.status).to.eql(200);
      expect(res.body.meta.pagination.total).to.eql(totalData)
    })
})
