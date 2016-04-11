/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/historico              ->  index
 * POST    /api/historico              ->  create
 * GET     /api/historico/:id          ->  show
 * PUT     /api/historico/:id          ->  update
 * DELETE  /api/historico/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Historico from './historico.model';
import Matricula from '../matricula/matricula.model';
import Empresa from '../empresa/empresa.model';

var each = require('async-each');
function respondOK(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            res.status(statusCode).json({'status':(entity.length != 0)});
        }
    }
}
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

function respondMatricula(req, res, statusCode) {
   statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(406).json({"error":"Matricula ja ha entrado"});
    } else {
      Historico.createAsync(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
    }
  }
}

function respondMatriculaOut(req, res, statusCode) {
   statusCode = statusCode || 200;
  return function(entity) {
    if (!entity) {
      res.status(406).json({"error":"Matricula no ha entrado"});
    } else {
      Historico.findByIdAsync(entity._id)
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res))
    }
  }
}
// Gets a list of Historicos
export function index(req, res) {
  Historico.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}
export function indexMatricula(req, res) {
  Historico.find({"it.reference" : "matricula" })
    .populate({ path: "it.id", model: Matricula})
    .then(respondWithResult(res))
    .catch(handleError(res));
}
export function indexMatriculaIn(req, res) {

  Historico.find({"it.reference" : "matricula", "out" : {$exists:false}})
    .populate({ path: "it.id", model: Matricula })
    //.populate({ path: "it.id.company", model: Empresa})
    .lean()
    .exec(function(err, matricules) {
      var len = matricules.length;
      var aux = matricules;
      var counter = 0;
      each(matricules,
            function(m,il,i) {
              Empresa.findById(m.it.id.company, function(err,c) {
                aux[counter].it.id.company = c.name;
                console.log(aux[counter]);
                if (++counter == len) {
                  console.log(aux);
                  res.status(200).json(aux);
                  console.log('patata2');
                }
              });
            },
            function(err,mat) {
              console.log('---------------------------------------');
              console.log(mat);
              
            });
      //respondWithResult(res);
      
    });
   // .catch(handleError(res));
}

export function indexMatriculaInId(req, res) {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(req.params.id);
    Historico.find({"it.reference" : "matricula", "out" : {$exists:false}, "it.id":req.params.id})
        .then(handleEntityNotFound(res))
        .then(respondOK(res));
}

// Gets a single Historico from the DB
export function show(req, res) {
  Historico.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res));
//    .catch(handleError(res));
}

// Creates a new Historico in the DB
export function create(req, res) {
  Historico.findOne({"it.reference" : "matricula" , "it.id" : req.body.it.id, "out" : {$exists: false}})
    .then(respondMatricula(req,res))
    .catch(handleError(res));
    //.then(respondWithResult(res, 201))
  /*  
  Historico.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
  */
}

// Updates an existing Historico in the DB
export function update(req, res) {
  Historico.findOne({"it.reference" : "matricula" , "it.id" : req.body.it.id, "in" : {$exists: true}, "out": {$exists: false}})
    .then(respondMatriculaOut(req,res))
    .catch(handleError(res));
  /*  
  Historico.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));*/
}

// Deletes a Historico from the DB
export function destroy(req, res) {
  Historico.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
