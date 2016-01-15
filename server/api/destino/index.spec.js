'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var destinoCtrlStub = {
  index: 'destinoCtrl.index',
  show: 'destinoCtrl.show',
  create: 'destinoCtrl.create',
  update: 'destinoCtrl.update',
  destroy: 'destinoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var destinoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './destino.controller': destinoCtrlStub
});

describe('Destino API Router:', function() {

  it('should return an express router instance', function() {
    destinoIndex.should.equal(routerStub);
  });

  describe('GET /api/destinos', function() {

    it('should route to destino.controller.index', function() {
      routerStub.get
        .withArgs('/', 'destinoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/destinos/:id', function() {

    it('should route to destino.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'destinoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/destinos', function() {

    it('should route to destino.controller.create', function() {
      routerStub.post
        .withArgs('/', 'destinoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/destinos/:id', function() {

    it('should route to destino.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'destinoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/destinos/:id', function() {

    it('should route to destino.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'destinoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/destinos/:id', function() {

    it('should route to destino.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'destinoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
