/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/externos              ->  index
 * POST    /api/externos              ->  create
 * GET     /api/externos/:id          ->  show
 * PUT     /api/externos/:id          ->  update
 * DELETE  /api/externos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Externo from './externo.model';

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

// Gets a list of Externos
export function index(req, res) {
  //Externo.findAsync()
  Externo.find()
    .populate({path:'matricula',populate: {path: 'company'}})
    .populate('company')
    .populate('language')
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Externo from the DB
export function show(req, res) {
  //Externo.findByIdAsync(req.params.id)
  Externo.findById(req.params.id)
    .populate('matricula')
    .populate('company')
    .populate('language')
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Externo in the DB
export function create(req, res) {
  Externo.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Externo in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Externo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Externo from the DB
export function destroy(req, res) {
  Externo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
