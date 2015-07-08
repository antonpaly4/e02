var $ = require('jquery');

var Xhr = new XMLHttpRequest();

var get = function(url){
  return $.get('/api/' + url);
};

var getItem = function(url, id){
  return $.get('/api/' + url + '/' + id);
};

var post = function(url, data){
  return $.ajax({
    method: 'post',
    url: '/api/' + url,
    data: data
  });
};

var update = function(url, id, data){
  return $.ajax({
    method: 'PUT',
    url: '/api/' + url + '/' + id,
    data: data
  });
};

var deleteItem = function(url, id){
  return $.ajax({
    method: 'DELETE',
    url: '/api/' + url + '/' + id
  });
};

module.exports = {
  get: get,
  getItem: getItem,
  post: post,
  update: update,
  delete: deleteItem
};