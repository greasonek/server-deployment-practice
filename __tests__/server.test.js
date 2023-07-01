'use strict';
// import supertest a library that lets us mock a server connection (like .listen)
// import jest
const supertest = require('supertest');
const server = require('../server.js');

const request = supertest(server);

// jest convention pattern of describe, test, expect
describe('basic server functions as expected', () => {
  //all the individual tests for this suite live in here
  test('request to goodbye route sends string goodbye', async() => {
    const response = await request.get('/goodbye');
    expect(response.text).toBe('goodbye');
  });
  test('handles undefined routes', async () => {
    const response = await request.get('/bad');
    expect(resonse.status).toEqual(404);
  });
}); 