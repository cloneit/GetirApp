
const request = require('supertest');
const app = require('../app');
describe('Post Endpoints', () => {
    it('should fetch records', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                "startDate": "2015-11-28",
                "endDate": "2015-12-01",
                "minCount": 2000,
                "maxCount": 3000
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('records');
    });
    it('should not fetch records due to null request body', async () => {
        const res = await request(app)
            .post('/records')
            .send(null);
        expect(res.statusCode).toEqual(400);
    });

    it('should throw BadRequest due to invalid endDate in request body', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                "startDate": "2015-11-28",
                "endDate": "nodate",
                "minCount": 2000,
                "maxCount": 3000
            });
        expect(res.statusCode).toEqual(400);
    });

    it('should throw BadRequest due to invalid startDate in request body', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                "startDate": "nodate",
                "endDate": "2015-11-28",
                "minCount": 2000,
                "maxCount": 3000
            });
        expect(res.statusCode).toEqual(400);
    });

    it('should throw BadRequest due to invalid minCount in request body', async () => {
        const res = await request(app)
            .post('/records')
            .send({
                "startDate": "2015-11-28",
                "endDate": "nodate",
                "minCount": "nonumber",
                "maxCount": 3000
            });
        expect(res.statusCode).toEqual(400);
    });
});