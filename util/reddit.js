let https = require('https');
let NodeCache = require('node-cache');
let cache = new NodeCache({
  stdTTL: 600
});

var used = [];

module.exports = function(subreddit, cb) {
  getCached(redditUri(subreddit), function(err, result) {
    if (err) {
      cb(err);
      return;
    }

    var acceptable = result.data.children
      .filter(function(c){ return c.kind == 't3' && (c.data.url.indexOf('imgur') != -1)  });

    var picked = null;
    var iterations = 0;
    while (iterations < 1000) {
        iterations++;
        picked = acceptable[Math.floor(acceptable.length * Math.random())];

        if (used.indexOf(picked.data.id) == -1) {
          used.push(picked.data.id);
          break;
        }
    }

    cb(null, picked.data);
  })
}



function get(uri, cb) {
  https.get(uri, function(response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      body = JSON.parse(body);
      cb(null, body);
    });
  })
}

function getCached(uri, cb) {
  cache.get(uri, function(err, value) {
    if (err) {
      cb(err);
      return;
    }

    if (value != undefined) {
        cb(null, value);
        return;
    }

    get(uri, function(err, value) {
      if (err) {
        cb(err);
        return;
      }

      cache.set(uri, value);
      cb(null, value);
    });
  })
}

function redditUri(subreddit) {
  return 'https://www.reddit.com/r/' + subreddit + '.json?t=day&limit=100';
}
