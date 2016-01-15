'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var externoCtrlStub = {
  index: 'externoCtrl.index',
  show: 'externoCtrl.show',
  create: 'externoCtrl.create',
  update: 'externoCtrl.update',
  destroy: 'externoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var externoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './externo.controller': externoCtrlStub
});

describe('Externo API Router:', function() {

  it('should return an express router instance', function() {
    externoIndex.should.equal(routerStub);
  });

  describe('GET /api/externos', function() {

    it('should route to externo.controller.index', function() {
      routerStub.get
        .withArgs('/', 'externoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/externos/:id', function() {

    it('should route to externo.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'externoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/externos', function() {

    it('should route to externo.controller.create', function() {
      routerStub.post
        .withArgs('/', 'externoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/externos/:id', function() {

    it('should route to externo.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'externoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/externos/:id', function() {

    it('should route to externo.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'externoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/externos/:id', function() {

    it('should route to externo.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'externoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
