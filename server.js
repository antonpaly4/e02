var express = require('express');
var path = require('path');
var winston = require('winston')
  , bodyParser = require('body-parser')
  , jade = require('jade');

var routes = require('./app/routes'); // Файл с роутам
var config = require('./app/config'); // Используемая конфигурация
var db = require('./app/libs/mongoose'); // Файл работы с базой MongoDB

var app = express()
  , port = process.env.PORT || config.get('port'); // Создаем обьект express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'jade');

// Если произошла ошибка валидации, то отдаем 400 Bad Request
app.use(function (err, req, res, next) {
  console.log(err.name);
  if (err.name == "ValidationError") {
    res.send(400, err);
  } else {
    next(err);
  }
});

app.use(express.static(path.join(__dirname, './public')));
app.use("/public", express.static(path.join(__dirname, './public')));

// Если же произошла иная ошибка то отдаем 500 Internal Server Error
app.use(function (err, req, res, next) {
  res.send(500, err);
});

// Инициализируем Handlers
var handlers = {
  objects: require('./app/handlers/objects'),
  services: require('./app/handlers/services'),
  slides: require('./app/handlers/slides'),
  upload: require('./app/handlers/upload')
};

// Метод запуска нашего сервера
function run() {
  routes.setup(app, handlers); // Связуем Handlers с Routes
  db.init(path.join(__dirname, "/app/models"), function (err, data) {
    //Выводим сообщение об успешной инициализации базы данных
    winston.info("All the models are initialized");
    app.listen(port, function () {
      // Сервер запущен
      winston.info("App running on port:" + port);
    });
  });
}

if (module.parent) {
  //Если server.js запущен как модуль, то отдаем модуль с методом run
  module.exports.run = run;
} else {
  //Иначе стартуем сервер прямо сейчас
  run();
}