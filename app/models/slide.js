var path = require('path');

module.exports = function(mongoose){
  var Schema = new mongoose.Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true}
  });

  return mongoose.model(path.basename(module.filename, '.js'), Schema);
};