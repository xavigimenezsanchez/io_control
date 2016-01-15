'use strict';

var app = require('../..');
import request from 'supertest';

var newExterno;

describe('Externo API:', function() {

  describe('GET /api/externos', function() {
    var externos;

    beforeEach(function(done) {
      request(app)
        .get('/api/externos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          externos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      externos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/externos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/externos')
        .send({
          name: 'New Externo',
          info: 'This is the brand new externo!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newExterno = res.body;
          done();
        });
    });

    it('should respond with the newly created externo', function() {
      newExterno.name.should.equal('New Externo');
      newExterno.info.should.equal('This is the brand new externo!!!');
    });

  });

  describe('GET /api/externos/:id', function() {
    var externo;

    beforeEach(function(done) {
      request(app)
        .get('/api/externos/' + newExterno._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          externo = res.body;
          done();
        });
    });

    afterEach(function() {
      externo = {};
    });

    it('should respond with the requested externo', function() {
      externo.name.should.equal('New Externo');
      externo.info.should.equal('This is the brand new externo!!!');
    });

  });

  describe('PUT /api/externos/:id', function() {
    var updatedExterno;

    beforeEach(function(done) {
      request(app)
        .put('/api/externos/' + newExterno._id)
        .send({
          name: 'Updated Externo',
          info: 'This is the updated externo!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedExterno = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedExterno = {};
    });

    it('should respond with the updated externo', function() {
      updatedExterno.name.should.equal('Updated Externo');
      updatedExterno.info.should.equal('This is the updated externo!!!');
    });

  });

  describe('DELETE /api/externos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/externos/' + newExterno._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when externo does not exist', function(done) {
      request(app)
        .delete('/api/externos/' + newExterno._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
