/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/destinos              ->  index
 * POST    /api/destinos              ->  create
 * GET     /api/destinos/:id          ->  show
 * PUT     /api/destinos/:id          ->  update
 * DELETE  /api/destinos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Destino from './destino.model';

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

// Gets a list of Destinos
export function index(req, res) {
  Destino.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Destino from the DB
export function show(req, res) {
  Destino.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Destino in the DB
export function create(req, res) {
  Destino.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Destino in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Destino.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Destino from the DB
export function destroy(req, res) {
  Destino.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
