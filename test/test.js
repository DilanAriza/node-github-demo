const request = require('supertest');
const app = require('../index');

describe("GET /", ()=>{
    it("Respond with hello world", (done)=>{
        request(app).get('/').expect('Hello World', done);
    });
});