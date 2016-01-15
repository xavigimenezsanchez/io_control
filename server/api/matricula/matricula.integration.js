'use strict';

var app = require('../..');
import request from 'supertest';

var newMatricula;

describe('Matricula API:', function() {

  describe('GET /api/matriculas', function() {
    var matriculas;

    beforeEach(function(done) {
      request(app)
        .get('/api/matriculas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          matriculas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      matriculas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/matriculas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/matriculas')
        .send({
          name: 'New Matricula',
          info: 'This is the brand new matricula!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMatricula = res.body;
          done();
        });
    });

    it('should respond with the newly created matricula', function() {
      newMatricula.name.should.equal('New Matricula');
      newMatricula.info.should.equal('This is the brand new matricula!!!');
    });

  });

  describe('GET /api/matriculas/:id', function() {
    var matricula;

    beforeEach(function(done) {
      request(app)
        .get('/api/matriculas/' + newMatricula._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          matricula = res.body;
          done();
        });
    });

    afterEach(function() {
      matricula = {};
    });

    it('should respond with the requested matricula', function() {
      matricula.name.should.equal('New Matricula');
      matricula.info.should.equal('This is the brand new matricula!!!');
    });

  });

  describe('PUT /api/matriculas/:id', function() {
    var updatedMatricula;

    beforeEach(function(done) {
      request(app)
        .put('/api/matriculas/' + newMatricula._id)
        .send({
          name: 'Updated Matricula',
          info: 'This is the updated matricula!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMatricula = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMatricula = {};
    });

    it('should respond with the updated matricula', function() {
      updatedMatricula.name.should.equal('Updated Matricula');
      updatedMatricula.info.should.equal('This is the updated matricula!!!');
    });

  });

  describe('DELETE /api/matriculas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/matriculas/' + newMatricula._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when matricula does not exist', function(done) {
      request(app)
        .delete('/api/matriculas/' + newMatricula._id)
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
