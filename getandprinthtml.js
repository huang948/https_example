var https = require('https');


function getAndPrintHTML () {

  var body = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      body += data;
    });

    response.on('end', function () {
      console.log(body);
    });

  });

}

getAndPrintHTML();