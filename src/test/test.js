const test = require('tape');
const request = require('supertest');
const app = require('../app');

test(' Tape Test', (t) => {
  t.equal(1, 1, 'Should Be Equal!');
  t.end();
});



test("Testing home endpoint", t => {
	request(app)
		.get("/")
		.expect(200)
		.expect("Content-Type", /html/)
		.end((error, result) => {
			t.error(error);
			t.end();
		});
});

test('This routes should return the flower Html', (t) => {
    request(app)
      .get('/flower/1')
      .expect(200)
      .expect(['Content-Type'], 'text/html; charset=utf-8', 'should be a ahtml page ')
      .end((err) => {
        t.error(err);
        t.end();
      });
  });


