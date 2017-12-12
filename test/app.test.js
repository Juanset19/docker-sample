const request = require('supertest');

const app = require('../app');

//BDT - Behavior Driven Test
describe('app', function() {
	it('should serve html on index', (done) => {
		request(app).get('/').expect('Content-Type', /html/).expect(200, done);
	});
});