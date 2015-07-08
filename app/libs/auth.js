var basicAuth = require('basic-auth-connect');

module.exports = basicAuth(function(user, password, next){
  var result = (user === 'admin' && password === 'eshieldpassadmin');

  next(null, result);
});