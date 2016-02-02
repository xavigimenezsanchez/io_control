'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var historicoCtrlStub = {
  index: 'historicoCtrl.index',
  show: 'historicoCtrl.show',
  create: 'historicoCtrl.create',
  update: 'historicoCtrl.update',
  destroy: 'historicoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var historicoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './historico.controller': historicoCtrlStub
});

describe('Historico API Router:', function() {

  it('should return an express router instance', function() {
    historicoIndex.should.equal(routerStub);
  });

  describe('GET /api/historico', function() {

    it('should route to historico.controller.index', function() {
      routerStub.get
        .withArgs('/', 'historicoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/historico/:id', function() {

    it('should route to historico.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'historicoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/historico', function() {

    it('should route to historico.controller.create', function() {
      routerStub.post
        .withArgs('/', 'historicoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/historico/:id', function() {

    it('should route to historico.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'historicoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/historico/:id', function() {

    it('should route to historico.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'historicoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/historico/:id', function() {

    it('should route to historico.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'historicoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
