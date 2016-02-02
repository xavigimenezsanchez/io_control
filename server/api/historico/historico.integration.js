'use strict';

var app = require('../..');
import request from 'supertest';

var newHistorico;

describe('Historico API:', function() {

  describe('GET /api/historico', function() {
    var historicos;

    beforeEach(function(done) {
      request(app)
        .get('/api/historico')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          historicos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      historicos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/historico', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/historico')
        .send({
          name: 'New Historico',
          info: 'This is the brand new historico!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newHistorico = res.body;
          done();
        });
    });

    it('should respond with the newly created historico', function() {
      newHistorico.name.should.equal('New Historico');
      newHistorico.info.should.equal('This is the brand new historico!!!');
    });

  });

  describe('GET /api/historico/:id', function() {
    var historico;

    beforeEach(function(done) {
      request(app)
        .get('/api/historico/' + newHistorico._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          historico = res.body;
          done();
        });
    });

    afterEach(function() {
      historico = {};
    });

    it('should respond with the requested historico', function() {
      historico.name.should.equal('New Historico');
      historico.info.should.equal('This is the brand new historico!!!');
    });

  });

  describe('PUT /api/historico/:id', function() {
    var updatedHistorico;

    beforeEach(function(done) {
      request(app)
        .put('/api/historico/' + newHistorico._id)
        .send({
          name: 'Updated Historico',
          info: 'This is the updated historico!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedHistorico = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedHistorico = {};
    });

    it('should respond with the updated historico', function() {
      updatedHistorico.name.should.equal('Updated Historico');
      updatedHistorico.info.should.equal('This is the updated historico!!!');
    });

  });

  describe('DELETE /api/historico/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/historico/' + newHistorico._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when historico does not exist', function(done) {
      request(app)
        .delete('/api/historico/' + newHistorico._id)
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
