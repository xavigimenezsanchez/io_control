'use strict';

var app = require('../..');
import request from 'supertest';

var newEmpresa;

describe('Empresa API:', function() {

  describe('GET /api/empresas', function() {
    var empresas;

    beforeEach(function(done) {
      request(app)
        .get('/api/empresas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          empresas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      empresas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/empresas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/empresas')
        .send({
          name: 'New Empresa',
          info: 'This is the brand new empresa!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEmpresa = res.body;
          done();
        });
    });

    it('should respond with the newly created empresa', function() {
      newEmpresa.name.should.equal('New Empresa');
      newEmpresa.info.should.equal('This is the brand new empresa!!!');
    });

  });

  describe('GET /api/empresas/:id', function() {
    var empresa;

    beforeEach(function(done) {
      request(app)
        .get('/api/empresas/' + newEmpresa._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          empresa = res.body;
          done();
        });
    });

    afterEach(function() {
      empresa = {};
    });

    it('should respond with the requested empresa', function() {
      empresa.name.should.equal('New Empresa');
      empresa.info.should.equal('This is the brand new empresa!!!');
    });

  });

  describe('PUT /api/empresas/:id', function() {
    var updatedEmpresa;

    beforeEach(function(done) {
      request(app)
        .put('/api/empresas/' + newEmpresa._id)
        .send({
          name: 'Updated Empresa',
          info: 'This is the updated empresa!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEmpresa = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEmpresa = {};
    });

    it('should respond with the updated empresa', function() {
      updatedEmpresa.name.should.equal('Updated Empresa');
      updatedEmpresa.info.should.equal('This is the updated empresa!!!');
    });

  });

  describe('DELETE /api/empresas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/empresas/' + newEmpresa._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when empresa does not exist', function(done) {
      request(app)
        .delete('/api/empresas/' + newEmpresa._id)
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
