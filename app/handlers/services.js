var mongoose = require('../libs/mongoose');

var modelName = 'service'
  , handlers = require('../libs/crudHandlers')(modelName);

module.exports = handlers;