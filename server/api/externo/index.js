'use strict';

var express = require('express');
var controller = require('./externo.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
//router.get('/pdf/:id',controller.pdf)
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/validar/:id', controller.validar);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;


// Per imprimir
// http://stackoverflow.com/questions/22189544/print-a-div-using-javascript-in-angularjs-single-page-aplication