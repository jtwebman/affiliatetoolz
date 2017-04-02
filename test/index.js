'use strict';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');

describe('/', () => {
  it('/ get returns hello world', () => {
    return request(app)
    .get('/')
    .expect(200)
    .then((res) => {
      expect(res.text).to.equal('Hello World!');
    });
  });
});
