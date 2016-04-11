'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var MatriculaSchema = new mongoose.Schema({
  name: String,
  info: String,
  company: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Empresa',
  	required: true
  },
  active: Boolean
});

export default mongoose.model('Matricula', MatriculaSchema);
