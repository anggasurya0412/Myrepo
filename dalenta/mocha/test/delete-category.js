const faker = require('faker');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Create new category', function() {
const baseurl = 'https://dalenta.net/';
const urlCreateCategory = 'sales/api/v1/category';
const url = 'sales/api/v1/category/';
const locationId = '4e8f211b-6fc3-46c9-9b3f-7b891461d4da';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3M2RlZjliZC1mYmI3LTQ1ZTAtOTBhZi04MjllOTU4OWJkMGUiLCJodWJJZCI6IjRlOGYyMTFiLTZmYzMtNDZjOS05YjNmLTdiODkxNDYxZDRkYiIsInVzZXJUeXBlIjoiUk9PVCIsInJvbGVBY2Nlc3NJZCI6bnVsbCwiaWF0IjoxNjMyOTkwMzcxLCJleHAiOjE2MzU1ODIzNzF9.sHWZkMZ2H1GYpmHQ5yZuDu5OcssUFSAbTAd1v6wU-2U';
let categoryName;
let cetegoryId;
    
    before(async function(){
        const bodyCreateCategory = generateBody();
        categoryName = bodyCreateCategory.name;
        const res = await chai
        .request(baseurl)
        .post(urlCreateCategory)
        .set({"Authorization": `Bearer ${token}`, 'locationId': locationId})
        .send(bodyCreateCategory)
        
        expect(res).to.have.status(200);
        expect(res.body.data.name).to.eql(categoryName);
        cetegoryId = res.body.data.id;

    })

        it('Delete existing category should success', async function(){
            const bodyDeleteCategory = generateBody();
            bodyDeleteCategory.name = categoryName;
            const res = await chai
            .request(baseurl)
            .delete(url + cetegoryId)
            .set({"Authorization": `Bearer ${token}`, 'locationId': locationId})
            .send(bodyDeleteCategory)
            
            expect(res).to.have.status(200);
        });
});

function generateBody() {
    var randomName = faker.random.alphaNumeric(12);
    const body = {
        name: `${randomName}`
    };
    return body;
  }