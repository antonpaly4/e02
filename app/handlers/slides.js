var mongoose = require('../libs/mongoose');

var modelName = 'slide'
  , handlers = require('../libs/crudHandlers')(modelName);

module.exports = handlers;