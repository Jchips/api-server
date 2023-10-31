'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

// Turn database on for test
beforeAll(async () => {
  await sequelizeDatabase.sync();
});

// Turn database off for test
afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  it('add a food', async () => {
    let response = await request.post('/food').send({
      name: 'banana',
      whereToGet: 'Safeway',
      amount: 1,
    });

    let responseTwo = await request.post('/food').send({
      name: 'apple',
      whereToGet: 'Trader Joes',
      amount: 2,
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('banana');
    expect(response.body.whereToGet).toEqual('Safeway');
    expect(response.body.amount).toEqual(1);
    expect(response.body.id).toBeTruthy();

    expect(responseTwo.status).toEqual(201);
    expect(responseTwo.body.name).toEqual('apple');
    expect(responseTwo.body.whereToGet).toEqual('Trader Joes');
    expect(responseTwo.body.amount).toEqual(2);
    expect(responseTwo.body.id).toBeTruthy();
  });

  // The order of these tests (it) matter bc this 2nd test relies on the one above.
  it('get all foods', async () => {
    let response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('banana');
    expect(response.body[1].name).toEqual('apple');
    expect(response.body[0].whereToGet).toEqual('Safeway');
    expect(response.body[1].whereToGet).toEqual('Trader Joes');
    expect(response.body[0].amount).toEqual(1);
    expect(response.body[1].amount).toEqual(2);
    expect(response.body[0].id).toBeTruthy();
  });

  it('get one food', async () => {
    let response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('banana');
    expect(response.body.whereToGet).toEqual('Safeway');
    expect(response.body.amount).toEqual(1);
    expect(response.body.id).toBeTruthy();
  });

  it('update a food', async () => {
    let response = await request.put('/food/2').send({
      name: 'apple',
      whereToGet: 'Safeway',
      amount: 2,
    });

    console.log(response.body);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(1);
  });

  it('delete a food', async () => {
    let response = await request.delete('/food/2');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('deleted food');
  });

  it('handles bad routes', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('handles bad method', async () => {
    const response = await request.post('/food/1');

    expect(response.status).toEqual(404);
  });
});
