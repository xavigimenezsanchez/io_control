'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var matriculaCtrlStub = {
  index: 'matriculaCtrl.index',
  show: 'matriculaCtrl.show',
  create: 'matriculaCtrl.create',
  update: 'matriculaCtrl.update',
  destroy: 'matriculaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var matriculaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './matricula.controller': matriculaCtrlStub
});

describe('Matricula API Router:', function() {

  it('should return an express router instance', function() {
    matriculaIndex.should.equal(routerStub);
  });

  describe('GET /api/matriculas', function() {

    it('should route to matricula.controller.index', function() {
      routerStub.get
        .withArgs('/', 'matriculaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/matriculas/:id', function() {

    it('should route to matricula.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'matriculaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/matriculas', function() {

    it('should route to matricula.controller.create', function() {
      routerStub.post
        .withArgs('/', 'matriculaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/matriculas/:id', function() {

    it('should route to matricula.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'matriculaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/matriculas/:id', function() {

    it('should route to matricula.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'matriculaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/matriculas/:id', function() {

    it('should route to matricula.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'matriculaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
