var path = require('path');

module.exports = function (mongoose) {

  var Schema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: {type: Array, required: true},
    images: {type: Array, required: true},
    type: {type: String, required: true},
    fullDescription: {type: String, required: true},
    shortDescription: {type: String, required: true},
    description: {type: String, required: true},
    onMainPage: {type: Boolean, required: true}
  });

  return mongoose.model(path.basename(module.filename, '.js'), Schema);
};