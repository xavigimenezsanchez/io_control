/**
 * Idioma model events
 */

'use strict';

import {EventEmitter} from 'events';
var Idioma = require('./idioma.model');
var IdiomaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
IdiomaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Idioma.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    IdiomaEvents.emit(event + ':' + doc._id, doc);
    IdiomaEvents.emit(event, doc);
  }
}

export default IdiomaEvents;
