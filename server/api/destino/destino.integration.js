'use strict';

var app = require('../..');
import request from 'supertest';

var newDestino;

describe('Destino API:', function() {

  describe('GET /api/destinos', function() {
    var destinos;

    beforeEach(function(done) {
      request(app)
        .get('/api/destinos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          destinos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      destinos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/destinos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/destinos')
        .send({
          name: 'New Destino',
          info: 'This is the brand new destino!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newDestino = res.body;
          done();
        });
    });

    it('should respond with the newly created destino', function() {
      newDestino.name.should.equal('New Destino');
      newDestino.info.should.equal('This is the brand new destino!!!');
    });

  });

  describe('GET /api/destinos/:id', function() {
    var destino;

    beforeEach(function(done) {
      request(app)
        .get('/api/destinos/' + newDestino._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          destino = res.body;
          done();
        });
    });

    afterEach(function() {
      destino = {};
    });

    it('should respond with the requested destino', function() {
      destino.name.should.equal('New Destino');
      destino.info.should.equal('This is the brand new destino!!!');
    });

  });

  describe('PUT /api/destinos/:id', function() {
    var updatedDestino;

    beforeEach(function(done) {
      request(app)
        .put('/api/destinos/' + newDestino._id)
        .send({
          name: 'Updated Destino',
          info: 'This is the updated destino!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDestino = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDestino = {};
    });

    it('should respond with the updated destino', function() {
      updatedDestino.name.should.equal('Updated Destino');
      updatedDestino.info.should.equal('This is the updated destino!!!');
    });

  });

  describe('DELETE /api/destinos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/destinos/' + newDestino._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when destino does not exist', function(done) {
      request(app)
        .delete('/api/destinos/' + newDestino._id)
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
