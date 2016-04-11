'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var HistoricoSchema = new mongoose.Schema({
  in: Date,
  out: Date,
  user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
  it: {
  		"reference" 	: String,
  		"id"			: mongoose.Schema.Types.ObjectId
  },
  destino: {type: mongoose.Schema.Types.ObjectId, ref: "destino"},
  active: Boolean
});

export default mongoose.model('Historico', HistoricoSchema);
