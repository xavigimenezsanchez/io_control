'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var empresaCtrlStub = {
  index: 'empresaCtrl.index',
  show: 'empresaCtrl.show',
  create: 'empresaCtrl.create',
  update: 'empresaCtrl.update',
  destroy: 'empresaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var empresaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './empresa.controller': empresaCtrlStub
});

describe('Empresa API Router:', function() {

  it('should return an express router instance', function() {
    empresaIndex.should.equal(routerStub);
  });

  describe('GET /api/empresas', function() {

    it('should route to empresa.controller.index', function() {
      routerStub.get
        .withArgs('/', 'empresaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/empresas/:id', function() {

    it('should route to empresa.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'empresaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/empresas', function() {

    it('should route to empresa.controller.create', function() {
      routerStub.post
        .withArgs('/', 'empresaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/empresas/:id', function() {

    it('should route to empresa.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'empresaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/empresas/:id', function() {

    it('should route to empresa.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'empresaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/empresas/:id', function() {

    it('should route to empresa.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'empresaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
