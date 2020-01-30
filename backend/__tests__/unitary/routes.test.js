const request = require('supertest');
const app = require('../../src/server');
describe('Routes', ()=>{
    it('should return a list of github users and a link to the next page', async()=>{
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
    })

    it('should return details of a github user', async()=>{
        const response = await request(app).get('/api/users/:username/details');
        expect(response.status).toBe(200);
    })

    it('should return a list of repositories from a github user', async()=>{
        const response = await request(app).get('/api/users/:username/repos');
        expect(response.status).toBe(200);
    })
});

