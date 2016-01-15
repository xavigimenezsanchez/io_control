/**
 * Destino model events
 */

'use strict';

import {EventEmitter} from 'events';
var Destino = require('./destino.model');
var DestinoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DestinoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Destino.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DestinoEvents.emit(event + ':' + doc._id, doc);
    DestinoEvents.emit(event, doc);
  }
}

export default DestinoEvents;
