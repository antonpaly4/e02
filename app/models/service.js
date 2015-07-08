var path = require('path');

module.exports = function(mongoose){
  var Schema = new mongoose.Schema({
    image: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    onMainPage: {type: Boolean, required: true}
  });

  return mongoose.model(path.basename(module.filename, '.js'), Schema);
};