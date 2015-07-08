var auth = require('../libs/auth');

module.exports.setup = function (app, handlers) {
  app.get('/', function (req, res) {
    res.render('index');
  });
  app.get('/services', function (req, res) {
    res.render('index');
  });
  app.get('/objects', function (req, res) {
    res.render('index');
  });
  app.get('/objects/*', function (req, res) {
    res.render('index');
  });

  app.get('/admin', auth, function(req, res, next){
    res.render('admin');
  });
  app.get('/admin/*', auth, function(req, res, next){
    res.render('admin');
  });

  app.post('/upload', auth, handlers.upload);

  // Objects api
  app.get('/api/objects', handlers.objects.list);
  app.get('/api/objects/:id', handlers.objects.get);
  app.post('/api/objects', auth, handlers.objects.create);
  app.put('/api/objects/:id', auth, handlers.objects.update);
  app.delete('/api/objects/:id', auth, handlers.objects.remove);

  // Services api
  app.get('/api/services', handlers.services.list);
  app.get('/api/services/:id', handlers.services.get);
  app.post('/api/services', auth, handlers.services.create);
  app.put('/api/services/:id', auth, handlers.services.update);
  app.delete('/api/services/:id', auth, handlers.services.remove);

  // Slider api
  app.get('/api/slider', handlers.slides.list);
  app.get('/api/slider/:id', handlers.slides.get);
  app.post('/api/slider', auth, handlers.slides.create);
  app.put('/api/slider/:id', auth, handlers.slides.update);
  app.delete('/api/slider/:id', auth, handlers.slides.remove);
};
