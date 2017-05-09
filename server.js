let app = _app();
let constants = require('./constants');

loadRoutes();

function loadRoutes() {
  let path = require('path');
  let fs = require('fs');

  var routesPath = path.join(__dirname, "routes");
  fs.readdirSync(routesPath)
    .forEach(function(file) {
      require('./routes/' + file)(app);
    })
}

function _app() {
  let express = require('express');
  let bodyParser = require('body-parser');
  let logger = require('morgan');

  let app = express();

  app.use(logger());
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(express.static(__dirname + "/public"));

  return app;
}

app.listen(8080);
