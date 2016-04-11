/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/empresas              ->  index
 * POST    /api/empresas              ->  create
 * GET     /api/empresas/:id          ->  show
 * PUT     /api/empresas/:id          ->  update
 * DELETE  /api/empresas/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Empresa from './empresa.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  console.log('patata');
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Empresas
export function index(req, res) {
  Empresa.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Empresa from the DB
export function show(req, res) {
  Empresa.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Empresa in the DB
export function create(req, res) {
  console.log('estic creant');
  Empresa.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Empresa in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Empresa.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Empresa from the DB
export function destroy(req, res) {
  console.log('patata');
  Empresa.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
