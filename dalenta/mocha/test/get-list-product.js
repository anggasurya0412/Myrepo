var request = require('request');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Get List Product', function() {
const baseurl = 'https://dalenta.net/';
const url = 'sales/api/v1/product/list';
const locationId = '4e8f211b-6fc3-46c9-9b3f-7b891461d4da';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3M2RlZjliZC1mYmI3LTQ1ZTAtOTBhZi04MjllOTU4OWJkMGUiLCJodWJJZCI6IjRlOGYyMTFiLTZmYzMtNDZjOS05YjNmLTdiODkxNDYxZDRkYiIsInVzZXJUeXBlIjoiUk9PVCIsInJvbGVBY2Nlc3NJZCI6bnVsbCwiaWF0IjoxNjMyOTkwMzcxLCJleHAiOjE2MzU1ODIzNzF9.sHWZkMZ2H1GYpmHQ5yZuDu5OcssUFSAbTAd1v6wU-2U';

        it('Get List Product should success', async function(){
            const res = await chai
            .request(baseurl)
            .get(url)
            .set({"Authorization": `Bearer ${token}`, 'locationID': locationId})
            .send()
            
            expect(res).to.have.status(200)
        });

        it('Get List Product without token should fail', async function() { 
            const res = await chai
            .request(baseurl)
            .get(url)
            .set({'locationID': locationId})
            .send()
            
            expect(res).to.have.status(401)
        });

        it('Get List Product without location id should fail', async function() {
            const res = await chai
            .request(baseurl)
            .get(url)
            .set({"Authorization": `Bearer ${token}`})
            .send()
            
            expect(res).to.have.status(400)
        });
});
