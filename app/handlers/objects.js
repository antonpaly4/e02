var mongoose = require('../libs/mongoose');

var modelName = 'object'
  , handlers = require('../libs/crudHandlers')(modelName);

module.exports = handlers;