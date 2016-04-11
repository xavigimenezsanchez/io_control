'use strict';

var express = require('express');
var controller = require('./historico.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/matricula', controller.indexMatricula);
router.get('/matricula/in', controller.indexMatriculaIn);
router.get('/matricula/in/:id',controller.indexMatriculaInId);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
