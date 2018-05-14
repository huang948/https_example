var https = require('https');

module.exports = function getHTML (options, callback) {

  var body = '';

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      body += data;
    });

    response.on('end', function () {
      callback(body);
    });

  });

}

function printHTML (html) {
  console.log(html);
}