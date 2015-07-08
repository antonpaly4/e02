var fs = require('fs')
  , multiparty = require('multiparty');

module.exports = function(req, res, next){
  var form = new multiparty.Form()
    , uploadFile = {uploadPath: '', type: '', size: 0}
    , maxSize = 5 //Mb
    , types = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
    , errors = [];

  form.on('error', function(err){
    if(fs.existsSync(uploadFile.path)) {
      fs.unlinkSync(uploadFile.path);
      console.log('error');
    }
  });

  form.on('close', function(){
    if(errors.length == 0){
      res.send({status: 'ok', text: 'success'});
    }
    else {
      if(fs.existsSync(uploadFile.path)) {
        fs.unlinkSync(uploadFile.path);
      }
      res.send({status: 'bad', errors: errors});
    }
  });

  form.on('part', function(part){
    uploadFile.size = part.byteCount;
    uploadFile.type = part.headers['content-type'];
    uploadFile.path = './public/files/' + part.filename;

    if(uploadFile.size > maxSize * 1024 * 1024){
      errors.push('Размер файла ' + uploadFile.size / 1024 / 1024 + 'Мб. Максимально допустимый размер ' + maxSize + 'Мб.');
    }
    if(types.indexOf(uploadFile.type) == -1){
      errors.push('Недопустимый формат файла');
    }
    if(errors.length == 0) {
      var out = fs.createWriteStream(uploadFile.path);
      part.pipe(out);
    }
    else {
      part.resume();
    }
  });

  form.parse(req);
};