'use strict';

var app = require('../..');
import request from 'supertest';

var newIdioma;

describe('Idioma API:', function() {

  describe('GET /api/idiomas', function() {
    var idiomas;

    beforeEach(function(done) {
      request(app)
        .get('/api/idiomas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          idiomas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      idiomas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/idiomas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/idiomas')
        .send({
          name: 'New Idioma',
          info: 'This is the brand new idioma!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newIdioma = res.body;
          done();
        });
    });

    it('should respond with the newly created idioma', function() {
      newIdioma.name.should.equal('New Idioma');
      newIdioma.info.should.equal('This is the brand new idioma!!!');
    });

  });

  describe('GET /api/idiomas/:id', function() {
    var idioma;

    beforeEach(function(done) {
      request(app)
        .get('/api/idiomas/' + newIdioma._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          idioma = res.body;
          done();
        });
    });

    afterEach(function() {
      idioma = {};
    });

    it('should respond with the requested idioma', function() {
      idioma.name.should.equal('New Idioma');
      idioma.info.should.equal('This is the brand new idioma!!!');
    });

  });

  describe('PUT /api/idiomas/:id', function() {
    var updatedIdioma;

    beforeEach(function(done) {
      request(app)
        .put('/api/idiomas/' + newIdioma._id)
        .send({
          name: 'Updated Idioma',
          info: 'This is the updated idioma!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedIdioma = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedIdioma = {};
    });

    it('should respond with the updated idioma', function() {
      updatedIdioma.name.should.equal('Updated Idioma');
      updatedIdioma.info.should.equal('This is the updated idioma!!!');
    });

  });

  describe('DELETE /api/idiomas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/idiomas/' + newIdioma._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when idioma does not exist', function(done) {
      request(app)
        .delete('/api/idiomas/' + newIdioma._id)
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
