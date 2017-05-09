let reddit = require('../util/reddit');
let constants = require('../constants');

module.exports = function(app) {
  app.post('/hipchat', function(req, res) {

    var findResults = Object.keys(constants.imageBots).filter(function(cmd) {
      return req.body.item.message.message.indexOf(cmd) == 0;
    });

    if (!findResults.length) {
      res.send("");
      return;
    }

    var subreddit = constants.imageBots[findResults[0]];

    reddit(subreddit, function(err, data) {
      console.log(err, data);

      var message = {
          "color": "green",
          "message": data.title + " " + data.url,
          "notify": false,
          "message_format": "text"
      }

      res.send(message);
    });
  })
}

//
// body: {"event":"room_message","item":{"message":{"date":"2017-04-06T03:09:11.040988+00:00","from":{"id":4305786,"links":{"self":"https://api.hipchat.com/v2/user/4305786"},"mention_name":"DesmondLee","name":"Desmond Lee","version":"00000000"},"id":"a1c8d408-21b1-4573-8fd7-e1a2eda50346","mentions":[],"message":"/dog","type":"message"},"room":{"id":3117679,"is_archived":false,"links":{"participants":"https://api.hipchat.com/v2/room/3117679/participant","self":"https://api.hipchat.com/v2/room/3117679","webhooks":"https://api.hipchat.com/v2/room/3117679/webhook"},"name":"Random","privacy":"public","version":"NC6EAP7M"}},"oauth_client_id":"1efc93bf-ba8b-4848-ba88-f94386b1687f","webhook_id":17116820}
// headers: {"connection":"close","content-length":"743","host":"deslee.duckdns.org","content-type":"application/json","accept-encoding":"gzip"}
// ::ffff:172.17.0.1 - - [Thu, 06 Apr 2017 03:09:11 GMT] "POST /hipchat HTTP/1.1" 200 2 "-" "-"
