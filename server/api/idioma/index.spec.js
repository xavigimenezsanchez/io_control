'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var idiomaCtrlStub = {
  index: 'idiomaCtrl.index',
  show: 'idiomaCtrl.show',
  create: 'idiomaCtrl.create',
  update: 'idiomaCtrl.update',
  destroy: 'idiomaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var idiomaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './idioma.controller': idiomaCtrlStub
});

describe('Idioma API Router:', function() {

  it('should return an express router instance', function() {
    idiomaIndex.should.equal(routerStub);
  });

  describe('GET /api/idiomas', function() {

    it('should route to idioma.controller.index', function() {
      routerStub.get
        .withArgs('/', 'idiomaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/idiomas/:id', function() {

    it('should route to idioma.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'idiomaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/idiomas', function() {

    it('should route to idioma.controller.create', function() {
      routerStub.post
        .withArgs('/', 'idiomaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/idiomas/:id', function() {

    it('should route to idioma.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'idiomaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/idiomas/:id', function() {

    it('should route to idioma.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'idiomaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/idiomas/:id', function() {

    it('should route to idioma.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'idiomaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
