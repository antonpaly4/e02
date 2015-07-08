var _ = require('underscore')
  , $ = require('jquery');

var Uploader = function(){
  this.files = [];

  var self = this
    , types = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
    , maxSize = 5;

  this.addFiles = function(files){
    _.each(files, function(file){
      var tmp = {
        file: file,
        name: file.name,
        valid: false
      };

      tmp.valid = (types.indexOf(file.type) !== -1) && file.size / 1024 / 1024 <= maxSize;

      self.files.unshift(tmp);

      upload();
    });

    return self.files;
  };

  var uploadFile = function(index){
    var file = self.files[index];

    if(file.valid){
      var data = new FormData();

      data.append('uploadFile', file.file);

      $.ajax({
        url: '/upload',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(response){
          if(response.status == 'ok'){
            return file;
          }
          else{
            return response.errors;
          }
        }
      })
    }
  };

  var upload = function(){
    _.each(self.files, function(file, index){
      uploadFile(index);
    })
  }
};

module.exports = new Uploader();