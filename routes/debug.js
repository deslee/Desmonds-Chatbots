let path = require('path');
let publicDir = path.join(__dirname, "../public");

module.exports = function(app) {

  app.all('/debug', function(req, res) {
    try {
      console.log("body: " + JSON.stringify(req.body));
      console.log("headers: " + JSON.stringify(req.headers));
    } catch(e) {
      console.error(e)
    }

    res.sendFile(path.join(publicDir, "index.html"));
  });

}
